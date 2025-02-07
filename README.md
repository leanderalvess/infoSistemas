# General Project Overview

## Description
This project includes both backend and frontend applications to manage vehicle. The backend is a REST API using **Node.js** and **DynamoDB**, while the frontend interface is builted with **Angular** to interact with the API.

## Project Structure
```
project-root/
├── backend/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── service/
│   ├── tests/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── angular.json
│   └── package.json
├── README.md (General)
└── .gitignore
```

## Key Features
1. **Backend:**
   - CRUD operations for vehicles via REST API
   - Local DynamoDB as the database
   - Unit Mocha tests to ensure API reliability

2. **Frontend:**
   - Interface to manage vehicles (list, add, edit, delete)
   - Real-time interaction with the backend API

## How to Run the Project
1. **Set up and run the backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Set up and run the frontend:**
   ```bash
   cd frontend
   npm install
   ng serve
   ```