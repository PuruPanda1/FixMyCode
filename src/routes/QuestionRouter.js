import { Router } from "express";
import { addQuestion, deleteQuestion, getQuestion, getQuestions, updateQuestion } from "../db/Questions.js";

const QuestionRouter = Router();

QuestionRouter.get('/get',async(req,res)=>{
    const data = await getQuestions();
    res.send(data);
})

QuestionRouter.get('/get/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await getQuestion(id);
    console.log(data);
    res.send(data);
})

QuestionRouter.post('/add',async(req,res)=>{
    const id = await addQuestion(req.body);
    res.send({msg:`succcess with ${id}`});
})

QuestionRouter.post('/update',async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await updateQuestion(id,data);
    res.send("updated");
})

QuestionRouter.post('/delete',async(req,res)=>{
    const id = req.body.id;
    await deleteQuestion(id);
    res.send({msg:"Deleted"});
})

export default QuestionRouter;