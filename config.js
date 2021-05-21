import firebase from 'firebase';
require('@firebase/firestore')

// var firebaseConfig = {
//   apiKey: "AIzaSyA3pcZoRS6QDcLj4pe8E4q4PhFY55_WSb0",
//   authDomain: "booksanta-eecec.firebaseapp.com",
//   databaseURL:"https://booksanta-eecec.firebaseio.com",
//   projectId: "booksanta-eecec",
//   storageBucket: "booksanta-eecec.appspot.com",
//   messagingSenderId: "315112119499",
//   appId: "1:315112119499:web:115c0a981837e44a108f4e"
// };

var firebaseConfig = {
  apiKey: "AIzaSyApb8JuFMUZOPlCn68P5lN1EcfKCkrfrcQ",
  authDomain: "book-santa-24b65.firebaseapp.com",
  databaseURL: "https://book-santa-24b65.firebaseio.com",
  projectId: "book-santa-24b65",
  storageBucket: "book-santa-24b65.appspot.com",
  messagingSenderId: "94216205151",
  appId: "1:94216205151:web:6ec99dc286b8cacd52bcea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
