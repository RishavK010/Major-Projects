# Frontend - Zerodha Clone

This is the frontend of the Zerodha clone application, built using **React.js and React Router**.

## Features
- Multi-page navigation using React Router
- Responsive UI with Bootstrap
- Integrated with backend API for stock and user data

## Project Structure
```
/frontend
│── src/
│   ├── landing_page/        # Components for different pages
│   ├── index.css            # Global styles
│   ├── main.jsx             # Main entry point with routes
│── public/                  # Static assets
│── index.html               
```

## Installation & Setup
1. **Navigate to the frontend folder:**
   ```sh
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the frontend server:**
   ```sh
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

## Dependencies
- **React.js** - Frontend library
- **React Router** - For navigation
- **Bootstrap** - UI framework

## Routing
The frontend uses React Router for navigation:
- `/` - Home Page
- `/login` - Login Page
- `/about` - About Page
- `/product` - Product Page
- `/pricing` - Pricing Page
- `/support` - Support Page
- `*` - 404 Not Found Page

## License
This project is for educational purposes only. Not for commercial use.
