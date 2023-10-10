import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blogosphere-f0170.firebaseapp.com",
  projectId: "blogosphere-f0170",
  storageBucket: "blogosphere-f0170.appspot.com",
  messagingSenderId: "502805185927",
  appId: "1:502805185927:web:7e5b1de23d3223f92bbf22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
