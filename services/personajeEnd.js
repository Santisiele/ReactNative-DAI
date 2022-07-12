import axiosClient from './axiosClient';
import {useState} from 'react'
import { getToken } from './tokenClient';

export const getpersonaje = async (userState) => {
    let lista
    let params = "";
    let where = false;
    let nombre = userState.nombre
    let peso = userState.peso
    let edad = userState.edad
    let idPeliSerie = userState.idPeliSerie
    if(idPeliSerie){
      where = true;
      params += `?idMovie=${idPeliSerie}`               
    }
    if(nombre){
        if(!where){
          where = true;
          params+= `?nombre=${nombre}`;
        }else{
          params+= `&nombre=${nombre}`
        }
    }
    if(edad){
        if(!where){
            where = true;
            params+= `?edad=${edad}`;                    
        }else{
          params+= `&edad=${edad}`;
        }
    }
    if(peso){
        if(!where){
            where = true;
            params+= `?peso=${edad}`;                    
        }else{
          params+= `&peso=${edad}`;
        }
    }   
    console.log(params)
  const response = axiosClient
      .get(`/character/${params}`,{
        
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
  const response = axiosClient
      .get(`/character/${userState.id}`,{
        ...userState
      })
      .then((res) => {
        personaje =res.data
        console.log(personaje)
        return personaje
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