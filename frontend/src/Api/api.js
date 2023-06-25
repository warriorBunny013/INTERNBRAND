import axios from 'axios';
axios.defaults.withCredentials=true;
const url = 'https://internbrand-uditi-backend.onrender.com/api';

export const getDatas= async () => {
    return await axios.get(`${url}/get`).catch((err)=>console.log(err));
}
