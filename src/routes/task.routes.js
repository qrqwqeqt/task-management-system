import { Router } from 'express';
import { TaskController } from '../controllers/task.controller.js';
import { TaskService } from '../services/task.service.js';

const router = Router();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.get('/', (req, res) => taskController.getAllTasks(req, res));
router.get('/:id', (req, res) => taskController.getTaskById(req, res));
router.post('/', (req, res) => taskController.createTask(req, res));
router.put('/:id', (req, res) => taskController.updateTask(req, res));
router.delete('/:id', (req, res) => taskController.deleteTask(req, res));

export default router;