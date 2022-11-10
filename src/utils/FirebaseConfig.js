import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export async function setupNewUser(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return;

  const newUsername = "New User " + uid.slice(0, 4);
  await setDoc(docRef, { username: newUsername });
}

export async function getProfileData(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function postUserName(uid, username) {
  const docRef = doc(db, "users", uid);
  const res = await setDoc(docRef, { username: username }, { merge: true });
  return;
}
