# Backend - Express & MongoDB

## Tech Stack

- **Node.js -** Server-side JavaScript
- **Express.js -** Web framework
- **MongoDB & Mongoose -** Database & ODM
- **JWT (JSON Web Tokens) -** Authentication
- **CORS -** Cross-Origin Resource Sharing

## Features:

✔ User Authentication (JWT-based)
✔ Product Management (Get all products, get product details)
✔ Protected Routes (Cart & Product Details require authentication)
✔ MongoDB Database.

## Installation and Setup:

1. Clone the repository:

```
git clone https://github.com/mishrabhi/navankur-assignment.git

cd navankur-assignment/backend
```

2. Install Dependencies:

```
npm install
```

3. Configure Environment Variables:

- Create a .env file and add:

```
JWT_SECRET=your_jwt_secret
```

4. Run the backend

```
npm start
```

Backend will run at http://localhost:5000

## Authentication & JWT

- Users login via /api/auth/login, and a JWT token is returned.
- This token is stored in localStorage in the frontend.
- Protected routes require the Authorization header with Bearer <token>.
