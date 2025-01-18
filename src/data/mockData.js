export const mockTasks = [
  {
    id: '1',
    title: 'Implement user authentication',
    description: 'Add JWT based authentication system',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    creatorId: '1',
    assigneeId: '2',
    dueDate: '2025-02-01',
    createdAt: '2025-01-16',
    updatedAt: '2025-01-16',
  },
  {
    id: '2',
    title: 'Create API documentation',
    description: 'Document all API endpoints using Swagger',
    status: 'TODO',
    priority: 'MEDIUM',
    creatorId: '2',
    assigneeId: '1',
    dueDate: '2025-02-15',
    createdAt: '2025-01-16',
    updatedAt: '2025-01-16',
  },
];

export const mockUsers = [
  {
    id: '1',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'ADMIN',
    createdAt: '2025-01-16',
    updatedAt: '2025-01-16',
  },
  {
    id: '2',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'USER',
    createdAt: '2025-01-16',
    updatedAt: '2025-01-16',
  },
];
