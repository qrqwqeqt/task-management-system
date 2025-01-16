import { Router } from 'express';
import { TaskController } from '../controllers/task.controller.js';
import { TaskService } from '../services/task.service.js';

const router = Router();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.post('/', taskController.createTask.bind(taskController));
router.get('/', taskController.getTasks.bind(taskController));

export default router;