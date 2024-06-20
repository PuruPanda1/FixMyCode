import { Router } from "express";
import { addQuestion } from "../db/Questions.js";

const QuestionRouter = Router();

// TODO send all the questions as json array
QuestionRouter.get('/',async(req,res)=>{
    res.send({msg:"Success"});
})

QuestionRouter.post('/add',async(req,res)=>{
    const id = await addQuestion(req.body);
    res.send({msg:`succcess with ${id}`});
})

export default QuestionRouter;