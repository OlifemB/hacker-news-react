import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "@/pages/home";
import Error from "@/pages/error";
import FullPost from "@/pages/full-post";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/post/:id" element={<FullPost/>}/>
            <Route path="*" element={<Navigate to="/error" replace/>}/>
        </Routes>
    )
};

export default Router;