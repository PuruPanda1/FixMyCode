import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
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

export async function getQuestion(id){
  const docRef = doc(db, "Questions", id);
  const question = await getDoc(docRef);
  console.log(question.exists());
  if(question.exists()){
    return question.data();
  }
  return {msg:"Not Found"};
} 

export async function updateQuestion(id, data){
  const docRef = doc(db, "Questions", id);
  await updateDoc(docRef, data)
  return true;
}

export async function deleteQuestion(id){
  const docRef = doc(db, "Questions", id);
  await deleteDoc(docRef);
  return true;
}