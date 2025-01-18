import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User } from '../models/user.model.js';
import { Task } from '../models/task.model.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    await Task.deleteMany({});

    const users = await User.create([
      {
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'ADMIN',
      },
      {
        email: 'jane@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        role: 'USER',
      },
    ]);

    await Task.create([
      {
        title: 'Implement user authentication',
        description: 'Add JWT based authentication system',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        creatorId: users[0]._id,
        assigneeId: users[1]._id,
        dueDate: new Date('2025-02-01'),
      },
      {
        title: 'Create API documentation',
        description: 'Document all API endpoints using Swagger',
        status: 'TODO',
        priority: 'MEDIUM',
        creatorId: users[1]._id,
        assigneeId: users[0]._id,
        dueDate: new Date('2025-02-15'),
      },
    ]);

    console.log('Database seeded successfully');
    //process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    //process.exit(1);
  }
};

seedData();
