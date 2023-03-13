import React, {useState} from 'react';
import {IComment} from "@/libs/types/comments";
import CommentItem from "@/components/comment-item";
import {Box, Typography} from "@mui/material";
import {postApi} from "@/store/post/post.api";
import Spinner from "@/components/spinner";


const CommentModule: React.FC<IComment> = (comment) => {
    const [getCommentKids, commentsProps] = postApi.useGetCommentKidsMutation()

    const renderSubNodes = (comments: IComment[]): React.ReactNode => {
        return comments.map(comment => (
                <Box sx={{
                    paddingLeft: '24px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CommentItem {...comment} key={`itemId${comment.id}`} />
                    {comment.childs && renderSubNodes(comment.childs)}
                </Box>
            )
        )
    }


    return (
        <Box sx={{gap: '4px', margin: 0, padding: 0}}>
            <CommentItem {...comment}/>

            {comment.kids && !commentsProps.data &&
                <Typography
                    sx={{color: '#1976d2', cursor: 'pointer',}}
                    onClick={() => getCommentKids(comment.id)}
                >
                    Show thread
                </Typography>
            }
            {commentsProps.isLoading && <Spinner block/>}
            {commentsProps.data && renderSubNodes(commentsProps.data.childs)}
        </Box>
    );
};

export default CommentModule;