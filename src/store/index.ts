import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postApi} from "@/store/post/post.api";

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
})


const middlewares = [
    postApi.middleware
]

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']