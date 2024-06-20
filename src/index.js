import express, { json } from 'express';
import QuestionRouter from './routes/QuestionRouter.js';
import questionDbReference from './config/firebase.js';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(json());

// Import routes
app.use('/questions', QuestionRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
