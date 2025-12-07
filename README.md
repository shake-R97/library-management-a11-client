# 📚 Book Archive Web App

A full-stack MERN project featuring authentication, protected routes, book management, and dynamic UI with animations.

🚀 Features Overview
🔹 Layout & Structure

Navbar (visible on all pages except 404)

Logo / Website Name

Home

All Books (Private Route)

Add Book (Private Route)

Borrowed Books (Private Route)

Login / Register (Shown only when user is logged out)

If logged in:

Shows user photo

Hover: Shows displayName

Logout button

Main Section

Displays content based on defined React routes.

Footer

Includes site info and a clean, attractive design.

🏠 Home Page Features
1️⃣ Banner / Slider

A carousel with at least 3 slides

Each slide includes meaningful text or visuals

2️⃣ Book Categories Section

Displays 4 category cards

Clicking a category → Shows books from that category

Each book card includes:

Image

Name

Author

Category

Quantity

Rating ⭐ (using react-rating-stars-component or similar)

Details button

🔘 Borrow System

Contains a Borrow button

Borrow button:

Opens a modal with form

User name & email auto-filled from logged-in user

Return date required

Submitting:

Decreases book quantity by 1 using MongoDB $inc

Adds the book to Borrowed Books list

Cannot go below 0

When quantity reaches 0, Borrow button becomes disabled

🔐 Authentication System
🔑 Login Page

Email

Password

Social Login (Google or GitHub — one required)

Link to Register page

📝 Register Page

Contains:

Name

Email

Photo URL

Password

Creates user and updates profile

Redirects properly after registration

🔒 Protected Routes

Pages only accessible when user is logged in:

All Books

Add Book

Borrowed Books

Details Page

If the user is not logged in → redirects to Login Page automatically.


⚙️ Technologies Used

React + Vite

Firebase Authentication

Express.js

MongoDB

React Router

Framer Motion

TailwindCSS / DaisyUI