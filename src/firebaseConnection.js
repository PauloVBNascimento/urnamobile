import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBywz6m5XGQmYWWNuSCpCqAJmOKnzu5MBc",
    authDomain: "projeto-urna-66db4.firebaseapp.com",
    projectId: "projeto-urna-66db4",
    storageBucket: "projeto-urna-66db4.appspot.com",
    messagingSenderId: "331657752440",
    appId: "1:331657752440:web:ef758b075e381efd7a228d",
    measurementId: "G-FER2V3QBXB"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;