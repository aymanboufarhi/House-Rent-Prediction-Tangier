import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchEmplacements = async () => {
  return await axios.get(${API_URL}/emplacements);
};

export const predictPrice = async (data) => {
  return await axios.post(${API_URL}/predict/, data);
};