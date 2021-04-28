import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDlKpWFdeYZ7pr11wbpiXqSTHyY6ECoopo",
	authDomain: "signal-b9716.firebaseapp.com",
	databaseURL: "https://signal-b9716-default-rtdb.firebaseio.com",
	projectId: "signal-b9716",
	storageBucket: "signal-b9716.appspot.com",
	messagingSenderId: "199080822964",
	appId: "1:199080822964:web:943fde4fb577c5f4946fe1",
	measurementId: "G-JF8PSEFWV5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
