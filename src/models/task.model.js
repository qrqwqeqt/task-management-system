export class Task {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.status = data.status;
    this.priority = data.priority;
    this.creatorId = data.creatorId;
    this.assigneeId = data.assigneeId;
    this.dueDate = data.dueDate;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  validate() {
    if (!this.title) throw new Error('Title is required');
    if (!this.status) throw new Error('Status is required');
    if (!this.priority) throw new Error('Priority is required');
    if (!this.creatorId) throw new Error('Creator ID is required');
  }
}
