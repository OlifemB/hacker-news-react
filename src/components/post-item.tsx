import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton} from '@mui/material';
import {IPost} from "@/libs/types/post";
import HTMLReactParser from 'html-react-parser'
import {timeConverter} from "@/libs/utils/timeConverter";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import StarIcon from '@mui/icons-material/Star';
import {stringAvatar} from "@/libs/utils/stringAvatar";

const PostItem: React.FC<IPost> = (post) => {
    const navigate = useNavigate()
    const date = timeConverter(post.time);

    return (
        <Card>
            <CardHeader
                avatar={<Avatar {...stringAvatar(post.by)}/>}
                title={post.by}
                subheader={date}
            />

            <CardContent sx={{paddingTop: 0}}>
                <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                </Typography>

                {post.isFull && post.text &&
                    <Typography gutterBottom variant="body1">{HTMLReactParser(post.text)}</Typography>
                }

                {post.url && <a href={post.url} target="_blank"> {post.url} </a>}
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <IconButton aria-label="score">
                        <StarIcon sx={{width: '1.5rem'}}/>
                        <Typography variant='body1'>
                            {post.score || 0}
                        </Typography>
                    </IconButton>

                    {post.isFull && <IconButton aria-label="comments">
                        <InsertCommentIcon sx={{width: '1.5rem'}}/>
                        <Typography variant='body1'>
                            {post.kids?.length || 0}
                        </Typography>
                    </IconButton>
                    }
                </Box>

                {!post.isFull && <Button size="small" onClick={() => navigate(`/post/${post.id}`)}>View more</Button>}
            </CardActions>
        </Card>
    );
};

export default PostItem;