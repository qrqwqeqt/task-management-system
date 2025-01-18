# Task Management System

A comprehensive task management system for development teams built with Node.js.
link [Render](https://task-management-system-k253.onrender.com)

## Project Overview

This system allows development teams to efficiently manage tasks, track progress, and analyze team performance.

### Core Features

- Task Management (creation, editing, deletion)
- User Management (authentication & authorization)
- Analytics (task completion metrics, team activity)
- Integration capabilities (external APIs, databases)
- Automated testing and deployment

### System Architecture

The application follows a modular architecture with the following components:

1. Task Module

   - Task CRUD operations
   - Task assignment
   - Status tracking

2. User Module

   - Authentication
   - Role-based access control
   - User profile management

3. Analytics Module

   - Performance metrics
   - Activity tracking
   - Report generation

4. Integration Module
   - Database connectivity
   - External API integration
   - Notification system

### Tech Stack

- Backend: Node.js with Express.js
- Database: MongoDB/PostgreSQL
- Testing: Jest, Cypress
- CI/CD: GitHub Actions
- Performance Testing: k6

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```

2. Install dependencies:

```bash
npm install
```

3. Create configuration file:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

## Project Structure

```
task-management-system/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── utils/         # Helper functions
│   └── app.js         # Application entry point
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── config/           # Configuration files
└── docs/            # Documentation
```

# Project Architecture Diagram

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        WebApp["Web Application"]
        Mobile["Mobile App"]
    end

    subgraph API["API Gateway Layer"]
        Gateway["API Gateway"]
        RateLimit["Rate Limiter"]
        Logger["Request Logger"]
        subgraph Security["Security Middleware"]
            Auth["Authentication"]
            CORS["CORS Handler"]
            Validator["Request Validator"]
        end
    end

    subgraph Core["Core Services Layer"]
        subgraph TaskModule["Task Management Module"]
            TaskService["Task Service"]
            TaskController["Task Controller"]
            TaskEvents["Task Event Handler"]
        end

        subgraph UserModule["User Management Module"]
            UserService["User Service"]
            UserController["User Controller"]
            AuthService["Auth Service"]
        end

        subgraph AnalyticsModule["Analytics Module"]
            AnalyticsService["Analytics Service"]
            AnalyticsController["Analytics Controller"]
            ReportGenerator["Report Generator"]
        end

        subgraph NotificationModule["Notification Module"]
            NotificationService["Notification Service"]
            EmailSender["Email Sender"]
            PushNotifier["Push Notifier"]
        end
    end

    subgraph Data["Data Layer"]
        subgraph Cache["Caching Layer"]
            Redis["Redis Cache"]
            MemCache["Memory Cache"]
        end

        subgraph DB["Database Layer"]
            MainDB["Primary Database"]
            ReplicaDB["Replica Database"]
        end

        subgraph Storage["File Storage"]
            S3["Document Storage"]
            LocalFS["Local Storage"]
        end
    end

    subgraph External["External Services"]
        EmailProvider["Email Provider"]
        CloudStorage["Cloud Storage"]
        Analytics["Analytics Platform"]
    end

    %% Client to API connections
    WebApp --> Gateway
    Mobile --> Gateway

    %% API Layer connections
    Gateway --> RateLimit
    Gateway --> Logger
    Gateway --> Security

    %% Security to Core connections
    Security --> TaskModule
    Security --> UserModule
    Security --> AnalyticsModule

    %% Core Module interconnections
    TaskModule --> NotificationModule
    TaskModule --> AnalyticsModule
    UserModule --> NotificationModule

    %% Core to Data connections
    TaskModule --> Cache
    TaskModule --> DB
    UserModule --> DB
    AnalyticsModule --> DB
    AnalyticsModule --> Cache

    %% External service connections
    NotificationModule --> EmailProvider
    AnalyticsModule --> Analytics
    Storage --> CloudStorage

    %% Styling
    classDef module fill:#f9f,stroke:#333,stroke-width:2px
    classDef service fill:#bbf,stroke:#333,stroke-width:2px
    classDef database fill:#dfd,stroke:#333,stroke-width:2px

    class TaskModule,UserModule,AnalyticsModule,NotificationModule module
    class Gateway,RateLimit,Logger,Auth,CORS,Validator service
    class MainDB,ReplicaDB,Redis,MemCache database
```

# Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ TASK : creates
    USER ||--o{ TASK : assigned_to
    USER ||--o{ USER_ROLE : has
    USER ||--o{ USER_SESSION : maintains
    USER ||--o{ NOTIFICATION : receives
    TASK ||--o{ TASK_HISTORY : logs
    TASK ||--o{ TASK_COMMENT : has
    TASK ||--o{ TASK_ATTACHMENT : contains
    TASK }|--|| TASK_STATUS : has
    TASK }|--|| TASK_PRIORITY : has
    TASK ||--o{ NOTIFICATION : generates

    USER {
        uuid id PK
        string email UK
        string password_hash
        string first_name
        string last_name
        boolean is_active
        string avatar_url
        datetime last_login
        datetime created_at
        datetime updated_at
    }

    USER_ROLE {
        uuid id PK
        uuid user_id FK
        string role_name
        json permissions
        datetime created_at
    }

    USER_SESSION {
        uuid id PK
        uuid user_id FK
        string token
        datetime expires_at
        string ip_address
        string user_agent
        datetime created_at
    }

    TASK {
        uuid id PK
        string title
        text description
        uuid creator_id FK
        uuid assignee_id FK
        uuid status_id FK
        uuid priority_id FK
        datetime due_date
        datetime completed_at
        integer estimated_hours
        integer actual_hours
        text tags
        datetime created_at
        datetime updated_at
    }

    TASK_STATUS {
        uuid id PK
        string name
        string color
        integer order
        boolean is_default
        datetime created_at
    }

    TASK_PRIORITY {
        uuid id PK
        string name
        string color
        integer level
        boolean is_default
        datetime created_at
    }

    TASK_HISTORY {
        uuid id PK
        uuid task_id FK
        uuid user_id FK
        string action
        json previous_state
        json new_state
        datetime created_at
    }

    TASK_COMMENT {
        uuid id PK
        uuid task_id FK
        uuid user_id FK
        text content
        uuid parent_id FK
        boolean is_edited
        datetime created_at
        datetime updated_at
    }

    TASK_ATTACHMENT {
        uuid id PK
        uuid task_id FK
        uuid user_id FK
        string file_name
        string file_type
        string file_url
        integer file_size
        datetime created_at
    }

    NOTIFICATION {
        uuid id PK
        uuid user_id FK
        uuid task_id FK
        string type
        string title
        text content
        boolean is_read
        datetime read_at
        datetime created_at
    }

    ANALYTICS_LOG {
        uuid id PK
        uuid user_id FK
        uuid task_id FK
        string event_type
        json event_data
        datetime created_at
    }
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT
