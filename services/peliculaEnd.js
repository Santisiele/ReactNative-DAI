import axiosClient from './axiosClient';
import { getToken } from './tokenClient';

export const getmovie = async () => {  
    let pelicula;
    let address;
    const response = axiosClient
        .get(`/movies`,{
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
    let address;
    const response = axiosClient
        .get(`/movies/${userState.id}`,{
            ...userState
        })
        .then((res) => {
            pelicula =res.data
            personaje = res.data.Personajes
            console.log(address)
            return pelicula, personaje
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