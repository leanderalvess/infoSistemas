# Frontend - Vehicle Management System

## Description
This project is a frontend builted with **Angular** (v16+) to consume the backend REST API and manage vehicles with a simple interface.

## Prerequisites
- Node.js (v16 or higher)
- Angular CLI (v16 or higher)
- npm (package manager)

## Installation
1. Clone the repository:
```bash
git clone <REPOSITORY_URL>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Available Commands

- **Start the development server:**
```bash
ng serve
```

- **Build the project for production:**
```bash
ng build --prod
```

## Features
- List vehicles
- Add new vehicles via modal form
- Edit existing vehicles
- Delete vehicles

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── vehicle-list/
│   │   │       ├── vehicle-list.component.css
│   │   │       ├── vehicle-list.component.html
│   │   │       └── vehicle-list.component.ts
│   │   ├── services/
│   │   │   └── vehicle.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```
