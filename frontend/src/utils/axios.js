import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5051'
})

export default axiosInstance