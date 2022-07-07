import personajeClient from './axiosClient'
import {useState} from 'react'

export const getToken = async (userState) => {
    
    const [token, setToken] = useState({
        token: ""
      });
    console.log();  
    personajeClient
        .get(`/auth/login`)
        .then((res) => {
            setToken(res.data)
          let userInfo = res.status;
          console.log("vamos bien")
        })
        .catch((e) => {
          console.log(`register error`, e.response);
        });
    };