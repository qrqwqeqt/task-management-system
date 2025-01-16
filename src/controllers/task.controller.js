export class TaskController {
    constructor(taskService) {
      this.taskService = taskService;
    }
  
    async createTask(req, res) {
      try {
        const task = await this.taskService.createTask(req.body);
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async getTasks(req, res) {
      try {
        const tasks = await this.taskService.getTasks(req.query);
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }