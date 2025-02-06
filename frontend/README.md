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
