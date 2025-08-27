import axios from 'axios'

export const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export const apiServer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})
