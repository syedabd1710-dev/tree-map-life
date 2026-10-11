import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmEGPAU2q5z_4M-hzDPfEZpz1Ds2Zmbhg",
  authDomain: "miniproject-dc88d.firebaseapp.com",
  projectId: "miniproject-dc88d",
  storageBucket: "miniproject-dc88d.firebasestorage.app",
  messagingSenderId: "757009353596",
  appId: "1:757009353596:web:c958c218076315e514729"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);