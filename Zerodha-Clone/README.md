# Zerodha Clone (MERN Stack)

This is a Zerodha clone built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project consists of three main components:
- **Backend** (Express + MongoDB)
- **Frontend** (React + Bootstrap)
- **Dashboard** (React + Bootstrap)

## Features
- User authentication and registration
- Real-time stock market data display
- Portfolio management
- Interactive dashboard with analytics

## Project Structure
```
/root-folder
│── backend/       # Express.js backend with MongoDB
│── frontend/      # Main UI built with React.js
│── dashboard/     # Separate dashboard for user analytics
│── package.json   # Root package.json to manage dependencies
│── README.md      # Project documentation
```

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/zerodha-clone.git
   cd zerodha-clone
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Navigate to each folder and install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   cd ../dashboard && npm install
   ```
4. **Run the project using `concurrently`:**
   ```sh
   npm start
   ```
   This will start the backend on `localhost:8080`, frontend on `localhost:5173`, and dashboard on `localhost:5174`.

## Environment Variables
Create a `.env` file inside the `backend/` folder with the following values:
```
MONGO_URI=your_mongo_db_uri
PORT=8080
JWT_SECRET=your_jwt_secret
```

## License
This project is for educational purposes only. Not for commercial use.
