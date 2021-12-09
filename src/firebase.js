import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzyKiGxApjLS_Tu6WZnS4cF1ZhIFlU6_I",
  authDomain: "prueba-b133b.firebaseapp.com",
  projectId: "prueba-b133b",
  storageBucket: "prueba-b133b.appspot.com",
  messagingSenderId: "45238599072",
  appId: "1:45238599072:web:17a850f953d12b26f738c5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
