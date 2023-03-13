import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

// instance.interceptors.request.use((config) => {
//     config.headers.Authorization = window.localStorage.getItem('token')
//     return config
// })

export default instance