import axios from 'axios';
axios.defaults.withCredentials=true;
const url = 'http://localhost:8800/api';

export const getDatas= async () => {
    return await axios.get(`${url}/get`).catch((err)=>console.log(err));
}
