import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/token/`, {
      username: username,
      password: password,
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Falha ao fazer login:', error);
    throw error;
  }
};

// Other calls of API...
