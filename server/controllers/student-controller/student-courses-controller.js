// const StudentCourses = require("../../models/StudentCourses");

// const getCoursesByStudentId = async (req, res) => {
//   try {
//     const { studentId } = req.params;
//     const studentBoughtCourses = await StudentCourses.findOne({
//       userId: studentId,
//     });

//     res.status(200).json({
//       success: true,
//       data: studentBoughtCourses.courses,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// module.exports = { getCoursesByStudentId };








// ✅ Full version — student-courses-controller.js
const StudentCourses = require("../../models/StudentCourses");

const getCoursesByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentBoughtCourses = await StudentCourses.findOne({
      userId: studentId,
    });

    res.status(200).json({
      success: true,
      data: studentBoughtCourses?.courses || [], // ✅ FIXED: Prevent error if null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// Enroll student in course
const StudentCourse = require("../../models/StudentCourses");

exports.enrollInCourse = async (req, res) => {
  try {
    const { userId } = req.params;
    const courseData = req.body;

    const alreadyEnrolled = await StudentCourse.findOne({
      studentId: userId,
      courseId: courseData.courseId,
    });

    if (alreadyEnrolled) {
      return res.status(400).json({ success: false, message: "Already enrolled" });
    }

    const newEnrollment = new StudentCourse({
      ...courseData,
      studentId: userId,
    });

    await newEnrollment.save();

    return res.status(201).json({ success: true, data: newEnrollment });
  } catch (error) {
    console.error("Enrollment error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};


module.exports = { getCoursesByStudentId, enrollInCourse };





