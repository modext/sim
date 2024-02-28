# CommissionPlanSimulator
 ## Tech Stack
1. Frontend: Next.js, Shopify Polaris for UI components
2. Backend: Node.js with Express
3. Database: MongoDb
4. ORM: Mongoose
5. Containerization: Docker and Docker Compose for easy deployment and development environment setup
## Prerequisites
Install Node.js (12.x or higher)
Install Docker and Docker Compose
## Installation & Running
1. Clone the Repository
# Setup Environment

## Backend environment setup
cd backend
cp .env.example .env

## Install Dependencies & Run Frontend
cd frontend
npm install
npm run dev

## Install Dependencies & Run Backend
cd backend
npm install

## Start Database
  docker-compose up --build

 # Access Application
Frontend: http://localhost:8000
Backend API: http://localhost:5001 
