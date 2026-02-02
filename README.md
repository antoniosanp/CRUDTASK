# CRUDTASK - Academic Task Management System

## Description
CRUDTASK is a Single Page Application (SPA) developed with Vanilla JavaScript for managing academic tasks. The system simulates a real environment with authentication, user roles (Student and Administrator), and a simulated REST API using `json-server`.

## Key Features

### General
- **SPA (Single Page Application)**: Smooth navigation without page reloads.
- **Authentication**: Login and Registration with session persistence.
- **Roles**: 
  - **User**: Manages their own tasks (CRUD).
  - **Admin**: Oversees metrics and manages all system tasks.
- **Route Protection**: Guards to ensure only authorized users access certain views.

### Technologies
- **Frontend**: HTML5, CSS3 (Vanilla + Variables), JavaScript (ES6+).
- **Simulated Backend**: JSON Server.
- **Persistence**: LocalStorage.

## Project Structure
```
/
├── index.html      # Entry point
├── src/
│   ├── components/ # Reusable components (Navbar, Layout, Forms)
│   ├── vies/      # Application views (Auth, User, Admin)
│   ├── router/     # Routing logic
│   ├── services/   # Communication with API and Storage
│   └── store/      # local Storage
├── db.json         # Simulated database
└── package.json    # Configuration and scripts
```

## Installation and Execution Instructions

### Requirements
- Node.js v18 or higher.

### Steps
1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server and application**:
   This project uses `json-server` for the API and serves static files.
   
   ```bash
   npm start
   ```
   
   The API will run at `http://localhost:3000`.
   To view the application, open the `index.html` file in your browser or use an extension like "Live Server" in VS Code.

## Test Credentials

| Role | Email | Password |
|-----|-------|----------|
| **Admin** | admin@gmail.com | 12345 |
| **user**  | (check db.json) | (check db.json)

## System Modules

### Dashboard
* check all users tasks

### MyTasks
* check user tasks
* edit user tasks

### Profile
* check user profile
* logout
