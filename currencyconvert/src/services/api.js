import axios from 'axios';

import { API_KEY } from '@env';

const API_URL = `https://api.exchangerate.host/latest?apikey=${API_KEY}`;


export const getExchangeRate = async (base, target) => {
  try {
    const response = await axios.get(`${API_URL}&base=${base}&symbols=${target}`);
    return response.data.rates[target];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
};