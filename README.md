# Blog Platform Backend

## https://task-2-two-theta.vercel.app/

## Admin Credentials

- **Email**: `admin@example.com`
- **Password**: `adminpassword`

---

## Overview

This project is a backend application for a blogging platform where admin can create, update, and delete their blogs. The system incorporates two roles:

- **Admin**: Manages users and blogs.
- **User**: See blogs.

The application includes secure authentication, role-based access control, and public API endpoints for viewing blogs with search, sort, and filter functionalities.

---

## Features

### User Management

- **Registration and Login**:
  - Users can register with their name, email, and password.
  - Authenticated using JWT tokens.
- **Role-Based Access Control**:
  - **User**: Can See all blogs.
  - **Admin**: Can create, update, and delete blogs.

### Blog Features

- **Create Blog**: Admin can create blogs.
- **Update Blog**: Admin can update blogs.
- **Delete Blog**: Admin can delete blog.
- **Public Blog API**: Accessible to users for viewing blogs with options for search, sorting, and filtering.

### Search, Sort, and Filter

- Search blogs by title, content, or author name.
- Sort blogs by date or title.
- Filter blogs by specific authors.

### Security

- **JWT Authentication**: Token validation for secure endpoints.
- **Password Encryption**: Securely stores passwords using `bcrypt`.
- **Role-Based Authorization**: Access control based on roles.

### Error Handling

- Consistent error responses across APIs:
  - Validation Errors
  - Authentication Errors
  - Authorization Errors
  - Not Found Errors

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/RUHULAMIN2024/task-2
   cd task-2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:

   ```env

   NODE_ENV=development
   PORT=5000
   DATABASE_URL= <mongodb_url>
   BCRYPT_SALT_ROUNDS=8
   jwt_access_secret=
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Authentication

- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### Blog Management

- **Create Blog**: `POST /api/blogs/create` (Requires authentication)
- **Update Blog**: `PUT /api/blogs/update/:id` (Requires authentication)
- **Delete Blog**: `DELETE /api/blogs/delete/:id` (Requires authentication)
- **Get All Blogs**: `GET /api/blogs/all`
- **Get Single Blog**: `GET /api/blogs/byId/:id`

---
