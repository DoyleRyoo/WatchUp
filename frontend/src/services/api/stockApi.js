import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const stockApi = {
  async getHoldings() {
    const response = await axios.get(
      `${API_URL}/api/stocks`,
      getAuthHeader()
    );

    return response.data;
  },

  async createHolding(data) {
    const response = await axios.post(
      `${API_URL}/api/stocks`,
      data,
      getAuthHeader()
    );

    return response.data;
  },

  async deleteHolding(id) {
    const response = await axios.delete(
      `${API_URL}/api/stocks/${id}`,
      getAuthHeader()
    );

    return response.data;
  },
};