import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "@/libs/types/post";
import {BASE_URL} from "@/libs/config/consts";
import {IComment} from "@/libs/types/comments";

export const postApi = createApi({
    reducerPath: 'PostApi',

    tagTypes: ['Posts', 'Comments'],

    baseQuery: fetchBaseQuery({}),

    endpoints: (build) => ({
        getPosts: build.query<IPost[], number | void>({
            query: () => ({
                url: `${BASE_URL}/newstories.json`
            }),
            transformResponse: async (data: number[]) => {
                return await Promise.all(data.slice(0, 100).map((id: number) =>
                    fetch(`${BASE_URL}/item/${id}.json`)
                        .then((r) => r.json())
                        .catch(e => console.log(e))))
                    .then(res => res.sort((a: IPost, b: IPost) => a.time + b.time))
            },
            providesTags: ['Posts'],
        }),


        getPostById: build.query<IPost[], number>({
            query: (id: number) => ({
                url: `${BASE_URL}/item/${id}.json`
            }),
            providesTags: ['Posts'],
        }),

        //<IComment[], number>
        getCommentsById: build.query({
            query: (id) => ({
                url: `${BASE_URL}/item/${id}.json`
            }),
            transformResponse: async (data: IPost) => {
                return data.kids && await Promise.all(data.kids.map((id: number) =>
                    fetch(`${BASE_URL}/item/${id}.json`).then((r) => r.json())))
            },
            providesTags: ['Comments']
        }),


        getCommentKids: build.mutation({
            query: (id) => ({
                url: `${BASE_URL}/item/${id}.json`,
                method: 'GET'
            }),
            transformResponse: async (comment: IComment) => {
                async function traverse(comment: IComment): Promise<IComment> {
                    if (comment.kids) {
                        const childPosts = await Promise.all(comment.kids.map(async (kid) => {
                            return await fetch(`${BASE_URL}/item/${kid}.json`).then(async (r) => {
                                const post = await r.json() as IComment;

                                return traverse(post);
                            }) as IComment;
                        }));

                        return {
                            ...comment,
                            childs: childPosts
                        }
                    }

                    return comment;
                }

                return traverse(comment)
            },
            invalidatesTags: ['Comments']
        }),
    })
})