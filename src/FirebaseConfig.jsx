import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCkB2HVk6OyKM7t9PniaMaAgBB0DW4i2LA",
    authDomain: "zeplenwork.firebaseapp.com",
    databaseURL: "https://zeplenwork.firebaseio.com",
    projectId: "zeplenwork",
    storageBucket: "zeplenwork.appspot.com",
    messagingSenderId: "1015568308840",
    appId: "1:1015568308840:web:5c157453a0d4c15a1f79dd",
    measurementId: "G-B8MT2KHLVJ"
  }; 

  export default firebase.initializeApp(firebaseConfig);
