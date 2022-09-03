import firebase from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyDzI-lgBVQeSDFezQ2SMumzJkfBUxX9cxY",
  authDomain: "react-library-app-7257a.firebaseapp.com",
  projectId: "react-library-app-7257a",
  storageBucket: "react-library-app-7257a.appspot.com",
  messagingSenderId: "32192115104",
  appId: "1:32192115104:web:b7a32773fec5557f1974c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();