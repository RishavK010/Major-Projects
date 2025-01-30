# Dashboard - Zerodha Clone

This is the dashboard module of the Zerodha clone application, built using **React.js and React Router**.

## Features
- Dynamic routing using React Router
- Context API for state management
- Various dashboard sections like holdings, orders, and funds

## Project Structure
```
/dashboard
│── src/
│   ├── components/            # Dashboard components
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point for routing
│── public/                    # Static assets
│── index.html                  
```

## Installation & Setup
1. **Navigate to the dashboard folder:**
   ```sh
   cd dashboard
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the dashboard server:**
   ```sh
   npm run dev
   ```
   The dashboard will start on `http://localhost:5174`.

## Dependencies
- **React.js** - Frontend library
- **React Router** - For navigation
- **Context API** - For global state management

## Routing
The dashboard uses React Router for navigation:
- `/` - Summary Page
- `/orders` - Orders Page
- `/holdings` - Holdings Page
- `/positions` - Positions Page
- `/funds` - Funds Page
- `/apps` - Apps Page

## License
This project is for educational purposes only. Not for commercial use.
