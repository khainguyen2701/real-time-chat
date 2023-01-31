import { db } from './index';
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
export const addCollection = async (collect, data) => {
    await addDoc(collection(db, collect), { ...data, creatAt: serverTimestamp() });
}