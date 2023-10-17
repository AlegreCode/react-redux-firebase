import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAU452Z90eXILoFD9Qa1wSV2VuKSrBJcyc",
  authDomain: "agenda-contactos-f7075.firebaseapp.com",
  projectId: "agenda-contactos-f7075",
  storageBucket: "agenda-contactos-f7075.appspot.com",
  messagingSenderId: "1041189429115",
  appId: "1:1041189429115:web:0407600c84da138cbb27de"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }