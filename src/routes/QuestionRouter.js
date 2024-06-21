import { Router } from "express";
import { addQuestion, getQuestions } from "../db/Questions.js";

const QuestionRouter = Router();

QuestionRouter.get('/',async(req,res)=>{
    const data = await getQuestions();
    res.send(data);
})

QuestionRouter.post('/add',async(req,res)=>{
    const id = await addQuestion(req.body);
    res.send({msg:`succcess with ${id}`});
})

export default QuestionRouter;