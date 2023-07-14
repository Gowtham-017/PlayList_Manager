import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtMYoR0Gwd9BZ_QiSZIgjdnx8ENyL4DKE",
  authDomain: "musicplaylist-f7e8e.firebaseapp.com",
  projectId: "musicplaylist-f7e8e",
  storageBucket: "musicplaylist-f7e8e.appspot.com",
  messagingSenderId: "822099502899",
  appId: "1:822099502899:web:c167e0fa5614df3fe80046"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider}; 