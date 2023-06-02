import axios from 'axios';

const   BASE_URL = 'http://54.163.208.73:8080'; 

export async function fetchData() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

