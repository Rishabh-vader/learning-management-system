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







const StudentCourses = require("../../models/StudentCourses");

// ✅ Get courses by student ID
const getCoursesByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentBoughtCourses = await StudentCourses.findOne({ userId: studentId });

    res.status(200).json({
      success: true,
      data: studentBoughtCourses?.courses || [],
    });
  } catch (error) {
    console.log("Get courses error:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// ✅ Enroll student in course
const enrollInCourse = async (req, res) => {
  try {
    const { userId } = req.params;
    const courseData = req.body;

    let student = await StudentCourses.findOne({ userId });

    // Create entry if student doesn't exist yet
    if (!student) {
      student = new StudentCourses({ userId, courses: [] });
    }

    // Check if already enrolled
    const alreadyEnrolled = student.courses.some(
      (course) => course.courseId.toString() === courseData.courseId
    );

    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled in this course.",
      });
    }

    // Add course to array
    student.courses.push(courseData);
    await student.save();

    return res.status(201).json({
      success: true,
      message: "Successfully enrolled in course.",
      data: student.courses,
    });
  } catch (error) {
    console.error("Enrollment error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during enrollment.",
    });
  }
};

module.exports = {
  getCoursesByStudentId,
  enrollInCourse,
};






