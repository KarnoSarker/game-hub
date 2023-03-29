import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '527be9c207e546269b716516a4eca743'
    }

}) 