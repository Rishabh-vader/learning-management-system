import axiosInstance from "@/api/axiosInstance";

export async function enrollInCourseService(studentId, course) {
  const { data } = await axiosInstance.post(`/student/enroll-course`, {
    studentId,
    course,
  });

  return data;
}
