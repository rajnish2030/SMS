import axios from "axios";

// Point baseURL to the server root, NOT /students
const API_URL = "http://34.236.132.166:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create Student -> POST http://100.48.125.225:8000/students
export const createStudent = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to create student";
  }
};

// Get All Students -> GET http://100.48.125.225:8000/students
export const getStudents = async () => {
  try {
    const response = await api.get("/students");
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to fetch students";
  }
};

// Delete Student -> DELETE http://100.48.125.225:8000/students/:id
export const deleteStudent = async (studentId) => {
  try {
    const response = await api.delete(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to delete student";
  }
};

export default api;