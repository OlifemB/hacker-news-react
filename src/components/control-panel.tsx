import {Box} from '@mui/material';
import React from 'react';

interface ControlPanelProps {
    children: React.ReactNode | React.ReactNode[]
}

const ControlPanel: React.FC<ControlPanelProps> = ({children}) => {
    return (
        <Box sx={{padding: '8px 0', display: 'flex', alignItems: 'center'}}>
            {children}
        </Box>
    );
};

export default ControlPanel;