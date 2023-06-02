import axios from 'axios';

const   BASE_URL = 'http://54.163.208.73:8080'; 

export async function fetchData() {
  try {
    const response = await axios.get(`${BASE_URL}/users/647178286edc199bff73e81f/reviews`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}