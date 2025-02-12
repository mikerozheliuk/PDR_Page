import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'pdr-page.firebaseapp.com',
  projectId: 'pdr-page',
  storageBucket: 'pdr-page.appspot.com',
  messagingSenderId: '1069098833716',
  appId: '1:1069098833716:web:39a4324dc06ac7a1e13761'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistence set to browserLocalPersistence');
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = result.user;

    const name = displayName ?? 'Anonymous';
    const userEmail = email ?? 'example@example.com';
    const profilePic = photoURL ?? '';

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', userEmail);
    sessionStorage.setItem('profilePic', profilePic);
  } catch (error) {
    console.error('Error during sign in:', error);
  }
};
