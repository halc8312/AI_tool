import axios from 'axios';
import { Tool } from '../types';

const API_URL = 'http://localhost:5000/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchTools = async () => {
  const response = await axios.get(`${API_URL}/tools`, getAuthHeader());
  return response.data;
};

export const addTool = async (tool: Omit<Tool, 'id'>) => {
  const response = await axios.post(`${API_URL}/tools`, tool, getAuthHeader());
  return response.data;
};

export const updateTool = async (id: string, tool: Partial<Tool>) => {
  const response = await axios.patch(`${API_URL}/tools/${id}`, tool, getAuthHeader());
  return response.data;
};

export const deleteTool = async (id: string) => {
  const response = await axios.delete(`${API_URL}/tools/${id}`, getAuthHeader());
  return response.data;
};