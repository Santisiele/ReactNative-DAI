import axiosClient from './axiosClient';
import { getToken } from './tokenClient';

export const createPersonaje = async (userState) => {
    console.log(userState);  
    axiosClient
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

    export const updatePersonaje = async (userState) => {
      console.log(userState);  
      axiosClient
          .put(`/character/${userState.id}`,{
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
  axiosClient
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