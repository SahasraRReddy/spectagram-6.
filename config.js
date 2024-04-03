import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5OJNg1L2Z31QTURjERXEQqroxCwCff84",
  authDomain: "spectagram-3ef0e.firebaseapp.com",
  projectId: "spectagram-3ef0e",
  storageBucket: "spectagram-3ef0e.appspot.com",
  messagingSenderId: "737316326371",
  appId: "1:737316326371:web:b02ae0cee57c43fb9e6ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default db;
