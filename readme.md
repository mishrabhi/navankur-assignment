# Shopping App - Full Stack MERN App

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce project that mimics any ecommerce website. It includes features such as authentication, product listing, product details, cart management, and protected routes.

# Frontend - React App

## Tech Stack:

- **React.js -** Frontend framework
- **React Router -** For navigation and route protection
- **Axios -** To fetch data from the backend
- **Tailwind CSS -** For responsive UI design
- **LocalStorage -** To store authentication tokens

## Features:

✔ Display **products** on the home page.

✔ **Product Details** page (Protected - Requires login).

✔ **Cart Management** (Protected - Requires login).

✔ **User Authentication** (Login/Logout).

✔ **Persistent authentication** using localStorage.

✔ **Responsive UI** with Tailwind CSS.

## Installation and Setup:

1. Clone the Repository

```
git clone https://github.com/mishrabhi/navankur-assignment.git

cd navankur-assignment/frontend
```

2.  Install dependencies

```
npm install
```

3. Run the frontend

```
npm run dev
```

Now, open http://localhost:5173 in your browser.

## Authentication & Private Routes:

- The Products page (/) is public.
- Product Details (/product/:id) and Cart (/cart) are protected routes.
- If a user tries to access a protected route without logging in, they will be redirected to the Login page.
- After successful login, the user is redirected back to the original protected page.

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
