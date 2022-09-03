import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { auth } from '../../firebaseConfig';

export const register = async({email, password}: any) => {
    const response = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
    return response.user;
};

export const login = async({email, password}: any) => {
    const response = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
    return response.user;
};
