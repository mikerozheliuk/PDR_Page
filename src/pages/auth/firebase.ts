import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

const provider = new GoogleAuthProvider();

// Оголошення інтерфейсів User і AuthResult
interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthResult {
  user: User;
  // Інші властивості AuthResult, які вам потрібні
}

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result: AuthResult) => {
      const { displayName, email, photoURL } = result.user;

      // Перевірка на null перед збереженням в localStorage
      const name = displayName ?? 'Anonymous';
      const userEmail = email ?? 'example@example.com';
      const profilePic = photoURL ?? '';

      localStorage.setItem('name', name);
      localStorage.setItem('email', userEmail);
      localStorage.setItem('profilePic', profilePic);
    })

    .catch((error) => {
      console.log(error);
    });
};
