import {Box, CircularProgress} from '@mui/material';
import React from 'react';

interface SpinnerProps {
    block?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({block}) => {

    if (block)
        return <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
        }}>
            <CircularProgress/>
        </Box>

    return <CircularProgress/>

};

export default Spinner;