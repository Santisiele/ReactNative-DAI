import PersonajeClient from './axiosClient';
import React, {useState, useEffect, useContext} from 'react';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';


export const deletepersonajebyid = async (userState) => {
    console.log(userState);  
    PersonajeClient
        .delete(`/character/`, userState,{
          ...userState
        })
        .then((res) => {
          let userInfo = res.status;
        })
        .catch((e) => {
          console.log(`register error`, e.response);
        });
    };