import { Router } from 'express';
const userRoutes = Router();

// Example route
userRoutes.get('/', (req, res) => {
  res.send('User route');
});

export default userRoutes;
