import {Avatar, Box, Card, CardContent, CardHeader} from '@mui/material';
import React from 'react';
import {IComment} from "@/libs/types/comments";
import HTMLReactParser from 'html-react-parser'
import {timeConverter} from "@/libs/utils/timeConverter";
import {stringAvatar} from "@/libs/utils/stringAvatar";
import {Link} from "react-router-dom";


const CommentItem = (comment: IComment) => {
    const date = timeConverter(comment.time);

    if (comment.deleted)
        return (
            <Card>
                <CardContent sx={{padding: '24px'}}>
                    This comment was deleted
                </CardContent>
            </Card>
        )

    return (
        <Card sx={{marginTop: '4px', marginBottom: '4px'}} id={comment.id.toString()}>
            <CardHeader
                avatar={<Avatar {...stringAvatar(comment.by)}/>}
                title={comment.by}
                subheader={date}
            />

            <CardContent sx={{paddingTop: 0}}>
                <Box>{HTMLReactParser(comment.text)}</Box>
                {comment.childs && comment.childs.map((kid) =>
                    (<Link to={`#${kid.id}`}>#{kid.id}</Link>)
                )}
            </CardContent>
        </Card>
    )
};

export default CommentItem;