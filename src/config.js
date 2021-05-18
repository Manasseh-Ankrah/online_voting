import firebase from 'firebase';

 
  export const firebaseConfig = {
    apiKey: "AIzaSyBx081arwpYZyCH9n4qCdlcAn7CfKRY9l4",
    authDomain: "online-voting-89f8a.firebaseapp.com",
    projectId: "online-voting-89f8a",
    storageBucket: "online-voting-89f8a.appspot.com",
    messagingSenderId: "382773066150",
    appId: "1:382773066150:web:e0e5ab72f0003f0e127767"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

 const db = firebase.firestore();
 export {db};



  