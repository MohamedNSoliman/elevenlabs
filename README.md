# Task Manager

A modern, full-stack task management application built with React and Express.

## Features

- Create, read, update, and delete tasks
- Mark tasks as pending, in-progress, or completed
- Set priority levels (low, medium, high)
- Filter tasks by status
- Real-time statistics dashboard
- Beautiful, responsive UI with Tailwind CSS
- SQLite database for data persistence

## Tech Stack

**Frontend:**
- React 18 with Vite
- Tailwind CSS for styling
- Modern, responsive design

**Backend:**
- Node.js with Express
- SQLite database (better-sqlite3)
- RESTful API architecture

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Install all dependencies:

```bash
npm run install:all
```

### Running the Application

**Option 1: Run both servers together (recommended)**

```bash
npm run dev
```

**Option 2: Run servers separately**

In one terminal:
```bash
npm run backend
```

In another terminal:
```bash
npm run frontend
```

### Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks (supports ?status=&priority= filters) |
| GET | /api/tasks/:id | Get a specific task |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |
| GET | /api/stats | Get task statistics |

## Project Structure

```
task-manager/
├── backend/
│   ├── server.js       # Express server and API routes
│   ├── package.json    # Backend dependencies
│   └── tasks.db        # SQLite database (auto-generated)
├── frontend/
│   ├── src/
│   │   ├── App.jsx     # Main React component
│   │   ├── main.jsx    # React entry point
│   │   └── index.css   # Tailwind CSS styles
│   ├── index.html      # HTML template
│   ├── vite.config.js  # Vite configuration
│   └── package.json    # Frontend dependencies
├── package.json        # Root package.json for running both services
└── README.md           # This file
```

## License

MIT
