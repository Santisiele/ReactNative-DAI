import PersonajeClient from './axiosClient';
import { getToken } from './tokenClient';

export const createPersonaje = async (userState) => {
    console.log(userState);  
    PersonajeClient
        .post(`/character/`,{
          ...userState
        })
        .then((res) => {
          let userInfo = res.status;
        })
        .catch((e) => {
          console.log(`register error`, e.response);
        });
    };

export const deletePersonaje = async (userState) => {
  console.log(userState);  
  PersonajeClient
      .delete(`/character/${userState.id}`,{
        ...userState
      })
      .then((res) => {
        let userInfo = res.status;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
  };