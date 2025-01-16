export class TaskService {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    async createTask(taskData) {
      // Validation logic here
      return await this.taskRepository.create(taskData);
    }
  
    async getTasks(filters) {
      return await this.taskRepository.find(filters);
    }
  
    async updateTask(id, taskData) {
      // Validation logic here
      return await this.taskRepository.update(id, taskData);
    }
  
    async deleteTask(id) {
      return await this.taskRepository.delete(id);
    }
  }