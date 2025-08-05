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

// ✅ NEW: Add Course to student’s purchased list
const enrollInCourse = async (req, res) => {
  try {
    const { userId, course } = req.body;

    let studentRecord = await StudentCourses.findOne({ userId });

    if (!studentRecord) {
      // ✅ Create new record if doesn't exist
      studentRecord = new StudentCourses({
        userId,
        courses: [course],
      });
    } else {
      // ✅ Avoid duplicate enrollment
      const alreadyEnrolled = studentRecord.courses.some(
        (c) => c.courseId === course.courseId
      );

      if (alreadyEnrolled) {
        return res.status(400).json({
          success: false,
          message: "Course already enrolled",
        });
      }

      studentRecord.courses.push(course);
    }

    await studentRecord.save();

    res.status(200).json({
      success: true,
      message: "Course enrolled successfully",
    });
  } catch (error) {
    console.log("Enroll error:", error);
    res.status(500).json({
      success: false,
      message: "Enrollment failed",
    });
  }
};

module.exports = { getCoursesByStudentId, enrollInCourse };





