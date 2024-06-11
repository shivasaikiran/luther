import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJeJrvE9e_3PjkOeL4V66cWabxZIak2Jk",
  authDomain: "luther-ea8b6.firebaseapp.com",
  projectId: "luther-ea8b6",
  storageBucket: "luther-ea8b6.appspot.com",
  messagingSenderId: "653210501431",
  appId: "1:653210501431:web:dcad14d5dd983db2341ab2"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

export { auth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber,app };
