// FirebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDt-c2_CSGh7FOO2L-ZvxgLOQKB5Kjm16c",
  authDomain: "tienda-cursos.firebaseapp.com",
  projectId: "tienda-cursos",
  storageBucket: "tienda-cursos.appspot.com",
  messagingSenderId: "585339683317",
  appId: "1:585339683317:web:e46a9da5c4144743bca0bc",
  measurementId: "G-M28N9N4EDL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app, analytics };
