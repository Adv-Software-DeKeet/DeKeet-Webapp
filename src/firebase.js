import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBChVGY17GUDFrTyNHfnH64jwgXuO5PraM",
  authDomain: "de-keet.firebaseapp.com",
  projectId: "de-keet",
  storageBucket: "de-keet.appspot.com",
  messagingSenderId: "744026341409",
  appId: "1:744026341409:web:cb5db679c4888c2f13e360",
  measurementId: "G-X5JNWSFLF3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    //TODO: Check if already exists
   axios.post("http://localhost:8094/user", {
    uid: user.uid,
    name: user.displayName,
    authProvidor: 'google',
    email: user.email
   })
   .then(function (response) {
       console.log("successfully send user!"+user);
   })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      axios.post("http://localhost:8094/user", {
        uid: user.uid,
        name: name,
        authProvidor: 'local',
        email: user.email
       })
       .then(function (response) {
           console.log("successfully send user!"+user);
       })
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };