import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {postApi} from "@/store/post/post.api";
import {Box, Button, Container, Typography} from '@mui/material';
import {IComment} from "@/libs/types/comments";
import PostItem from "@/components/post-item";
import Spinner from "@/components/spinner";
import ControlPanel from "@/components/control-panel";
import CommentModule from "@/components/comment-module";
import {IPost} from "@/libs/types/post";

const FullNews = () => {
    const {id} = useParams()
    const post = postApi.useGetPostByIdQuery(Number(id!))
    const comments = postApi.useGetCommentsByIdQuery(Number(id!))
    const navigate = useNavigate()

    return (
        <Container maxWidth="sm">

            <ControlPanel>
                <Button onClick={() => navigate('/')}>Back</Button>
            </ControlPanel>

            {post.data && <PostItem {...post.data} isFull/>}
            {post.isLoading && <Spinner block/>}
            {post.error && 'error'}


            <Box sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '24px',
                    marginBottom: '0px'
                }}>
                    <Typography variant={'h6'}>Comments</Typography>
                    <Button
                        size="small"
                        disabled={!comments.data}
                        onClick={() => comments.refetch()}
                    >
                        Refetch
                    </Button>
                </Box>

                {comments.data &&
                    comments.data.map((comment: IComment) =>
                        <CommentModule {...comment} key={`comment-${comment.id}`}/>
                    )
                }
                {comments.isLoading && <Spinner block/>}
                {!comments.isLoading && !comments.data && 'no comments'}
                {comments.error && 'loading comments error'}
            </Box>
        </Container>
    );
};

export default FullNews;
