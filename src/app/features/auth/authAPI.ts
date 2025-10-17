import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signInUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};