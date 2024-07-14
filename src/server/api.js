import axios from "axios";

const API_URL = "https://667d255b297972455f63b481.mockapi.io/PhucTQSE172503";

export const getAllPlayers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getAllPlayers api", error.message);
  }
};

export const getDetailsPlayer = async (id) => {
  try {
    return await axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getDetailsPlayer api", error.message);
  }
};

export const deletePlayerById = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deletePlayerById api", error.message);
  }
};

export const updatePlayer = async (id, data) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling updatePlayer api", error.message);
  }
};

export const addNewPlayer = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addNewPlayer api", error.message);
  }
};
