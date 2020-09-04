import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyC9nn1ezQ1EGSjkMnYHURS50ZKiN3DDeUM",
    authDomain: "dynamo-gram.firebaseapp.com",
    databaseURL: "https://dynamo-gram.firebaseio.com",
    projectId: "dynamo-gram",
    storageBucket: "dynamo-gram.appspot.com",
    messagingSenderId: "358836993331",
    appId: "1:358836993331:web:d1eb9ff8053209afa15246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectFirestore = firebase.firestore()
  const projectStorage =  firebase.storage()
  const projectAuth = firebase.auth()
  const timeStamp= firebase.firestore.FieldValue.serverTimestamp;


  export {projectFirestore, projectStorage,projectAuth,  timeStamp}