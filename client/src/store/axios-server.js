import axios from 'axios';

const instance = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') 
                 ? axios.create({baseURL: 'http://localhost:3031'})
                 : axios.create({baseURL: 'http://192.236.176.82:3031'});

export default instance;