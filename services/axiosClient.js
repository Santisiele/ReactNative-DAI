import axios from 'axios';
import {BASE_URL} from '../config.js'

const personajeClient = axios.create({
    baseURL: BASE_URL,
    
})

export default personajeClient;