import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   const name = result.user.displayName;
      //   const email = result.user.email;
      //   const profilePic = result.user.photoURL;
      //   localStorage.setItem("name", name);
      //   localStorage.setItem("email", email);
      //   localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
