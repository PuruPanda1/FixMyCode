import { addDoc, collection } from "firebase/firestore";
import db from "../config/firebase.js";


export async function addQuestion(question) {
    try {
        console.log(question);
      const docRef = await addDoc(collection(db,"Questions"), question);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
