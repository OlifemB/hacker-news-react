import React from 'react';
import {useNavigate} from "react-router-dom";
import ControlPanel from "@/components/control-panel";
import {Button, Container} from "@mui/material";

const Error: React.FC = (props) => {
    const navigate = useNavigate()

    return (
        <Container maxWidth="sm">
            <ControlPanel>
                <Button onClick={() => navigate('/')}>Back</Button>
            </ControlPanel>
            Error
        </Container>
    );
};

export default Error;