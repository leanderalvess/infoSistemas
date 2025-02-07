# Backend - Vehicle Management System

## Description
This project is a **Node.js** backend that provides a REST API for managing vehicle info. It uses **DynamoDB** to store data.

## Prerequisites
- Node.js (v16 or higher)
- Docker (for local DynamoDB)
- npm (package manager)
- DynamoDB running locally (via Docker)

## Installation
1. Clone the repository:
```bash
git clone <REPOSITORY_URL>
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Copy the `.env` sample file:
```bash
cp .env.sample .env
```

4. Edit the `.env` file if necessary.

## DynamoDB (comandos no package.json)
1. Init local DynamoDB
```bash
npm run db:create
```

2. Create tables
```bash
npm run db:createTables
```

3. List tables
```bash
npm run db:listTables
```

## Available Commands

- **Start the local server:**
```bash
npm start
```

- **Run mocha unit tests:**
```bash
npm test
```

## REST Endpoints

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| GET    | /api/vehicles    | Returns all vehicles            |
| POST   | /api/vehicles    | Adds a new vehicle              |
| PUT    | /api/vehicles/:id| Updates vehicle data            |
| DELETE | /api/vehicles/:id| Removes a specific vehicle      |

## Project Structure

```
backend/
├── controllers/
│   └── vehicleController.js
├── data/
│   └── createTable.js
├── routes/
│   └── vehicleRoutes.js
├── service/
│   └── vehicleService.js
├── tests/
│   └── vehicle.test.js
├── utils/
│   └── setupAws.js
├── .env
├── package.json
└── server.js
```