# Task Manager - Node.js To-Do List

## Introduction

Welcome to Task Manager, a Node.js-based To-Do List application. This project is designed to help you manage your tasks efficiently. It provides a simple and user-friendly interface for creating, updating, retrieving, and deleting tasks. The backend of this application is powered by Node.js, MongoDB, and Mongoose for database operations.

### Features

    * Create new tasks with a title, description, and due date.
    * Update existing tasks to mark them as completed or modify their details.
    * Retrieve a list of all tasks or a specific task by ID.
    * Delete tasks that are no longer needed.
    * Robust error handling with middleware for not found routes and other errors.
    * Integration with MongoDB for data storage.
    * Mongoose validation to ensure data consistency.
    * Asynchronous error handling with async/await and error wrapper functions.

### Technologies

    * Node.js
    * Express.js
    * MongoDB
    * Mongoose
    * JavaScript

### API Endpoints

The following API endpoints are available:

    GET /api/v1/tasks: Retrieve all tasks.
    GET /api/v1/tasks/:id: Retrieve a specific task by ID.
    POST /api/v1/tasks: Create a new task.
    PUT /api/v1/tasks/:id: Update an existing task by ID.
    DELETE /api/v1/tasks/:id: Delete a task by ID.

### Middleware

The project includes middleware for handling not found routes and error handling. These middlewares ensure a smooth user experience and robust error handling.

    notFoundMiddleware: Handles requests to routes that do not exist, returning a 404 status code.
    errorHandlerMiddleware: Provides consistent error responses for various types of errors, ensuring a graceful user experience.

Thank you for using Task Manager! If you have any questions or encounter any issues, please don't hesitate to reach out to us. Happy task managing!
