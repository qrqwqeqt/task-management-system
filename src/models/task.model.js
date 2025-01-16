export class Task {
    constructor({
      id,
      title,
      description,
      status,
      priority,
      creatorId,
      assigneeId,
      dueDate,
      createdAt,
      updatedAt,
    }) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.creatorId = creatorId;
      this.assigneeId = assigneeId;
      this.dueDate = dueDate;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  