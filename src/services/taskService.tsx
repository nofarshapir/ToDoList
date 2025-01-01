import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks";

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL + "/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks", error);
    return [];
  }
};

export const addTask = async (task: {
  title: string;
  description?: string;
  completed: boolean;
  user_id?: number;
}) => {
  try {
    const response = await axios.post(API_URL + "/addTask/", task);
    return response.data;
  } catch (error) {
    console.error("Error adding task", error);
  }
};
