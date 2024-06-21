import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../config/firebase.js";

const questionDbReference = collection(db,"Questions");

export async function addQuestion(question) {
    try {
        console.log(question);
      const docRef = await addDoc(questionDbReference, question);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


export async function getQuestions(){
    const querySnapshot = await getDocs(questionDbReference);
    const questions = querySnapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
    return questions;
}