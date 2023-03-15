// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChVGY17GUDFrTyNHfnH64jwgXuO5PraM",
  authDomain: "de-keet.firebaseapp.com",
  projectId: "de-keet",
  storageBucket: "de-keet.appspot.com",
  messagingSenderId: "744026341409",
  appId: "1:744026341409:web:cb5db679c4888c2f13e360",
  measurementId: "G-X5JNWSFLF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
  //  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  //  const docs = await getDocs(q);
   // if (docs.docs.length === 0) {
    //  await addDoc(collection(db, "users"), {
    //    uid: user.uid,
     //   name: user.displayName,
      //  authProvider: "google",
     //   email: user.email,
     // });
   // }
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
      //Save person in DB
      // authProvider: local
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