import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9ksWN49-e-T3DLtR-KRHI5N2ZfEoBXFk",
  authDomain: "photopgraphy-portfolio.firebaseapp.com",
  projectId: "photopgraphy-portfolio",
  storageBucket: "photopgraphy-portfolio.appspot.com",
  messagingSenderId: "648742670356",
  appId: "1:648742670356:web:7ee7f2cfd5a1856ae09701",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
