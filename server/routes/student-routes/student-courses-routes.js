// const express = require("express");
// const {
//   getCoursesByStudentId,
// } = require("../../controllers/student-controller/student-courses-controller");

// const router = express.Router();

// router.get("/get/:studentId", getCoursesByStudentId);

// module.exports = router;





// ✅ Full version — student-courses-routes.js
const express = require("express");
const router = express.Router();
  
const {
  getCoursesByStudentId,
  enrollInCourse,
} = require("../../controllers/student-controller/student-courses-controller");



// ✅ Get courses bought by student
router.get("/get/:studentId", getCoursesByStudentId);

// ✅ POST: Enroll in a course
router.post("/enroll-course/:userId", enrollInCourse);
module.exports = router;
