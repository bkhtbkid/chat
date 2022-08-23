import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const data = initializeApp({
    apiKey: "AIzaSyC9ohMiM9-2HPFDzolv2acHEgFuUoldBig",
    authDomain: "chat-project-f272f.firebaseapp.com",
    projectId: "chat-project-f272f",
    storageBucket: "chat-project-f272f.appspot.com",
    messagingSenderId: "1005685561001",
    appId: "1:1005685561001:web:69170ddf0d1055733b3bb8",
});

const auth = getAuth();

const db = getFirestore(data);

export { data, auth, db };
