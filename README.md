# 📚 Learning Management System (LMS) Backend

## 📌 Overview
A backend-driven **Learning Management System** built with **Node.js**, **Express.js**, and **MongoDB**, designed to support:
- Course creation & management
- Student enrollment
- Instructor revenue tracking
- Secure authentication & authorization

This project is designed with **scalability**, **security**, and **maintainability** in mind, making it suitable for real-world production environments.

---

## 🚀 Features
- **Course Management** – Create, update, delete, and fetch courses
- **User Authentication** – JWT-based secure login and registration
- **Payment Integration** – Razorpay payment gateway for course purchases
- **Revenue Tracking** – Instructors can view total earnings
- **Cloud Storage** – Cloudinary integration for file uploads
- **Role-Based Access** – Admin, Instructor, and Student permissions
- **Secure APIs** – RESTful design with input validation

---

## 🛠 Tech Stack
**Backend Framework:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ODM)  
**Authentication:** JWT, bcrypt  
**Payment Gateway:** Razorpay  
**Cloud Storage:** Cloudinary  
**Tools:** Postman, Git

---

## 📂 Project Structure
.
├── controllers/ # Handles request logic
├── models/ # Mongoose schemas
├── routes/ # API routes
├── config/ # DB config & environment setup
├── app.js # Main server entry point
├── package.json # Dependencies and scripts
└── README.md # Project documentation

---

## 🔗 Live Demo
🚀 **Backend API:** [Live API Link](https://your-render-link-here) *(Coming soon after deployment)*  
💻 **Source Code:** [GitHub Repository](https://github.com/Rishabh-vader/learning-management-system)

---

## 📜 API Documentation
You can test the API using **Postman** or any REST client.  
Common endpoints include:
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – User login & JWT issuance
- `POST /api/courses` – Create a course (Instructor only)
- `GET /api/courses` – Fetch all courses
- `POST /api/payment` – Initiate payment for a course

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas or local MongoDB
- Razorpay account
- Cloudinary account

### Installation
# Clone the repo
git clone https://github.com/YOUR-USERNAME/learning-management-system.git

# Navigate to project folder
cd learning-management-system

# Install dependencies
npm install

# Environment Variables
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-jwt-secret
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-key-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Run the Server
npm rundev


