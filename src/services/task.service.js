import { mockTasks } from '../data/mockData.js';
import { Task } from '../models/task.model.js';

export class TaskService {
  constructor() {
    this.tasks = [...mockTasks];
  }

  async getAllTasks() {
    return this.tasks;
  }

  async getTaskById(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new Error('Task not found');
    return task;
  }

  async createTask(taskData) {
    const task = new Task({
      id: (this.tasks.length + 1).toString(),
      ...taskData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    task.validate();
    this.tasks.push(task);
    return task;
  }

  async updateTask(id, taskData) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new Error('Task not found');

    const updatedTask = {
      ...this.tasks[index],
      ...taskData,
      updatedAt: new Date().toISOString(),
    };

    this.tasks[index] = updatedTask;
    return updatedTask;
  }

  async deleteTask(id) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new Error('Task not found');
    this.tasks.splice(index, 1);
    return { success: true };
  }
}
