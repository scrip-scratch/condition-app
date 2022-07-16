import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterception = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    console.log(config);
    return config;
}

$authHost.interceptors.request.use(authInterception);

export {
    $host,
    $authHost
}