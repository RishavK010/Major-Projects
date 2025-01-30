# Backend - Zerodha Clone

This is the backend service for the Zerodha clone application, built using **Node.js, Express.js, and MongoDB**.

## Features
- RESTful API for fetching holdings, positions, and orders
- MongoDB integration using Mongoose
- CORS support and body parsing

## Project Structure
```
/backend
│── model/            # Mongoose models (Holding, Orders and Positions)
│── schemas/          # Mongoose schemas (Holding, Orders and Positions)
│── .env              # Environment variables (MongoDB URL, etc.)
│── index.js          # Main entry point of the backend server
```

## Installation & Setup
1. **Navigate to the backend folder:**
   ```sh
   cd backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file** in the `backend/` directory with the following variables:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=8080
   ```
4. **Run the backend server:**
   ```sh
   npm start
   ```
   The backend will start on `http://localhost:8080`.

## API Endpoints
- `GET /allHoldings` - Fetch all holdings
- `GET /allPositions` - Fetch all positions
- `POST /newOrder` - Create a new order

## Dependencies
- **Express.js** - Web framework for Node.js
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **body-parser** - Parse request bodies
- **cors** - Enable cross-origin requests

## License
This project is for educational purposes only. Not for commercial use.
