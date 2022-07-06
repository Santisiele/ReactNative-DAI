import axios from 'axios'
import AxiosClient from './miEdificioClient';
import React, {useState, useEffect, useContext} from 'react';


export const getAll = async (userState) => {
    console.log(userState);  
    AxiosClient
        .post(`/character`, {
          ...userState
        })
        .then((res) => {
          let userInfo = res.status;
        })
        .catch((e) => {
          console.log(`register error`, e.response);
        });
    };