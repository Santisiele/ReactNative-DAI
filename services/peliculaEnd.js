import axiosClient from './axiosClient';
import { getToken } from './tokenClient';

export const getmovie = async (userState) => {  
    let pelicula;
    let params = ""
    if(userState.order){
        params += `?order=${userState.order}`
        console.log(params)
    }
    console.log(userState)
    const response = axiosClient
        .get(`/movies${params}`,{
        })
        .then((res) => {
            pelicula =res.data
            return pelicula
        })
        .catch((e) => {
            console.log(`register error`, e.response);
        });
        return response
    };

export const getmoviebyid = async (userState) => {  
    let pelicula;
    let personaje;
    const response = axiosClient
        .get(`/movies/${userState.id}`,{
            ...userState
        })
        .then((res) => {
            pelicula = res.data
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