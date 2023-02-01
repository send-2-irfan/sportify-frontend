import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDBxdzFJeMc_OquhD6VBw-AQS8SZolcTFA",
  authDomain: "siba-sportify.firebaseapp.com",
  projectId: "siba-sportify",
  storageBucket: "siba-sportify.appspot.com",
  messagingSenderId: "134973558891",
  appId: "1:134973558891:web:1930ce52a1a8265e2de12e"
}

const app = initializeApp(config);
export const auth = getAuth(app);
export default app;
