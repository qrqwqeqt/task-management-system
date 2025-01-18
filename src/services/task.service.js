import { Task } from '../models/task.model.js';

export class TaskService {
  async getAllTasks(filter = {}) {
    return await Task.find(filter)
      .populate('creatorId', 'firstName lastName')
      .populate('assigneeId', 'firstName lastName');
  }

  async getTaskById(id) {
    const task = await Task.findById(id)
      .populate('creatorId', 'firstName lastName')
      .populate('assigneeId', 'firstName lastName');
    
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async createTask(taskData) {
    const task = new Task(taskData);
    return await task.save();
  }

  async updateTask(id, taskData) {
    const task = await Task.findByIdAndUpdate(
      id,
      taskData,
      { new: true, runValidators: true }
    );

    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async deleteTask(id) {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return { success: true };
  }
}
