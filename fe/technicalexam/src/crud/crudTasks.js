import { useState, useEffect } from "react";
import api from '../services/api';

export const useCrudTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [err, setError] = useState({
    code: "",
    message: "",
    response: {
      data: {
        statusCode: 0,
        message: '',
        originalErrorMessage: '',
        errorCode: ''
      }
    }
  });

  useEffect(() => {
    const retrieveTasks = async () => {
      try {
        const response = await api.get('/');
        setTasks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    retrieveTasks();
  }, []);

  const createTask = async (task) => {
    try {
      const response = await api.post("/", task);
      setSuccessMessage(response.data.message);
      setTasks([...tasks, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const response = await api.put(`/${id}`, task);
      setSuccessMessage(response.data.message);
      setTasks(tasks.map((u) => (u._id === id ? response.data : u)));
    } catch (error) {
      setError(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const deleteResponse = await api.delete(`/${id}`);
      setSuccessMessage(deleteResponse?.data?.message);
      setTasks(tasks.filter((u) => u._id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const resetSuccessMessage = () => {
    setSuccessMessage("");
  };

  return { tasks, loading, err, createTask, updateTask, deleteTask, successMessage, resetSuccessMessage };
};