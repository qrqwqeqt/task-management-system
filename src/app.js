import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import './models/user.model.js';
import './models/task.model.js';
import taskRoutes from './routes/task.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


await connectDB();  

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});