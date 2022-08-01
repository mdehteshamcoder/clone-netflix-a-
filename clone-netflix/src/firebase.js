import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjFRFDMQrholcWoBxRKHFYiP3lBX3jOWs",
    authDomain: "clone-netflix-41a92.firebaseapp.com",
    projectId: "clone-netflix-41a92",
    storageBucket: "clone-netflix-41a92.appspot.com",
    messagingSenderId: "797546898705",
    appId: "1:797546898705:web:f1c520c205c8d9f6aa98b0"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  

  export { auth }