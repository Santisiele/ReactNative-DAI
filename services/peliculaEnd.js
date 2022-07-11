import axiosClient from './axiosClient';
import { getToken } from './tokenClient';

export const getmoviebyid = async (userState) => {  
    let pelicula;
    const response = axiosClient
        .get(`/movies/${userState.id}`,{
          ...userState
        })
        .then((res) => {
          pelicula =res.data
          console.log(pelicula)
          return pelicula
        })
        .catch((e) => {
          console.log(`register error`, e.response);
        });
      return response
    };

export const createPelicula = async (userState) => {
    console.log(userState);  
    axiosClient
        .post(`/movies/`,{
            ...userState
        })
        .then((res) => {
            let userInfo = res.status;
        })
        .catch((e) => {
            console.log(`register error`, e.response);
        });
    };

    export const updatePelicula = async (userState) => {
        console.log(userState);  
        axiosClient
        .put(`/movies/${userState.id}`,{
            ...userState
        })
        .then((res) => {
            let userInfo = res.status;
        })
        .catch((e) => {
            console.log(`register error`, e.response);  
        });
    };

export const deletePelicula = async (userState) => {
    console.log(userState);  
    axiosClient
        .delete(`/movies/${userState.id}`,{
        ...userState
        })
        .then((res) => {
        let userInfo = res.status;
        })
        .catch((e) => {
        console.log(`register error`, e.response);
    });};