import axios from 'axios'

const instance = axios.create({
    baseURL : "https://axios-test-5c2b9.firebaseio.com",
})

export default instance;