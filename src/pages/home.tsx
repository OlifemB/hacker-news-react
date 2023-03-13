import React from 'react';
import {Box, Button, Container} from '@mui/material';
import PostItem from "@/components/post-item";
import {postApi} from "@/store/post/post.api";
import Spinner from "@/components/spinner";
import ControlPanel from "@/components/control-panel";


const Home: React.FC = () => {
    const post = postApi.useGetPostsQuery()

    setInterval(() => {
        post.refetch()
    }, 60000)

    return (
        <Container maxWidth="sm">
            <ControlPanel>
                <Button onClick={() => post.refetch()} disabled={!post.data}>Refetch news</Button>
            </ControlPanel>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                {post.error && 'error'}
                {post.data &&
                    post.data.map(item => <PostItem {...item} key={`newsId-${item.id}`}/>)
                }
                {post.isLoading && <Spinner block/>}
            </Box>
        </Container>
    )
};

export default Home;