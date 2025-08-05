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


#THE COMPLETE STRUCTURE IS:
LMS Project

server/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
│
├── models/
│   ├── User.js
│   ├── Course.js
│   ├── Order.js
│   ├── StudentCourses.js
│   └── CourseProgress.js
│
├── controllers/
│   ├── auth-controller/
│   │   └── index.js
│   ├── instructor-controller/
│   │   └── course-controller.js
│   └── student-controller/
│       ├── course-controller.js
│       ├── order-controller.js
│       ├── student-courses-controller.js
│       └── course-progress-controller.js
│
├── routes/
│   ├── auth-routes/
│   │   └── index.js
│   ├── instructor-routes/
│   │   ├── course-routes.js
│   │   └── media-routes.js
│   └── student-routes/
│       ├── course-routes.js
│       ├── order-routes.js
│       ├── student-courses-routes.js
│       └── course-progress-routes.js
│
├── middleware/
│   └── auth-middleware.js
│
├── helpers/
│   ├── cloudinary.js
│   └── paypal.js
│
└── uploads/

client/
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
│
├── public/
│   ├── banner-img   // PNG
│   └── vite.svg
│
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
│   ├── api/
│   │   └── axiosInstance.js
│
│   ├── assets/
│   │   └── react.svg
│
│   ├── components/
│   │   ├── common-form/
│   │   │   ├── form-controls.jsx
│   │   │   └── index.jsx
│   │   ├── instructor-view/
│   │   │   ├── dashboard/
│   │   │   │   └── index.jsx
│   │   │   └── courses/
│   │   │       ├── index.jsx
│   │   │       └── add-new-course/
│   │   │           ├── course-curriculum.jsx
│   │   │           ├── course-landing.jsx
│   │   │           └── course-settings.jsx
│   │   ├── media-progress-bar/
│   │   │   └── index.jsx
│   │   ├── route-guard/
│   │   │   └── index.jsx
│   │   ├── student-view/
│   │   │   ├── common-layout.jsx
│   │   │   └── header.jsx
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── scroll-area.jsx
│   │   │   ├── select.jsx
│   │   │   ├── slider.jsx
│   │   │   ├── switch.jsx
│   │   │   ├── table.jsx
│   │   │   ├── tabs.jsx
│   │   │   ├── toast.jsx
│   │   │   ├── toaster.jsx
│   │   │   ├── skeleton.jsx
│   │   │   └── textarea.jsx
│   │   └── video-player/
│   │       └── index.jsx
│
│   ├── config/
│   │   └── index.js
│
│   ├── context/
│   │   ├── auth-context/
│   │   │   └── index.jsx
│   │   ├── instructor-context/
│   │   │   └── index.jsx
│   │   └── student-context/
│   │       └── index.jsx
│
│   ├── hooks/
│   │   └── use-toast.js
│
│   ├── lib/
│   │   └── utils.js
│
│   ├── pages/
│   │   ├── auth/
│   │   │   └── index.jsx
│   │   ├── instructor/
│   │   │   ├── index.jsx
│   │   │   └── add-new-course.jsx
│   │   ├── not-found/
│   │   │   └── index.jsx
│   │   ├── student/
│   │   │   ├── course-details/
│   │   │   │   └── index.jsx
│   │   │   ├── course-progress/
│   │   │   │   └── index.jsx
│   │   │   ├── courses/
│   │   │   │   └── index.jsx
│   │   │   ├── home/
│   │   │   │   └── index.jsx
│   │   │   ├── payment-return/
│   │   │   │   └── index.jsx
│   │   │   └── student-courses/
│   │   │       └── index.jsx
│
│   ├── services/
│   │   └── index.js

