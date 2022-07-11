import axiosClient from './axiosClient';
import {useState} from 'react'
import { getToken } from './tokenClient';

export const getpersonaje = async () => {
    let lista
  const response = axiosClient
      .get(`/character/`,{
        
      })
      .then((res) => {
        lista=res.data
        console.log(lista)
        return lista
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
      return response
  };

export const getperbyid = async (userState) => {  
  let personaje;
  let pelicula;
  const response = axiosClient
      .get(`/character/${userState.id}`,{
        ...userState
      })
      .then((res) => {
        personaje =res.data
        pelicula = res.data.PeliculasSeries
        console.log(personaje)
        return personaje, pelicula
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
    return response
  };

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

    export const updatePersonaje = async (userState, userId) => {
      console.log(userState);  
      axiosClient
          .put(`/character/${userId.id}`,{
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