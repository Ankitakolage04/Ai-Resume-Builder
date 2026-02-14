import axios from "axios";

// Use environment variable for API URL in production, fallback to localhost in development
export const baseURLL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
  timeout: 300000, // 5 minutes (300,000 ms)
});

export const generateResume = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};