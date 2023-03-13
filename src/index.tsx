import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {setupStore} from "./store";
import {BrowserRouter} from "react-router-dom";
import Router from "@/pages/index";
import './styles/main.scss'

const container = document.getElementById("root")!;
const root = createRoot(container);

const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)