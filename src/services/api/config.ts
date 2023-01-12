import axios from "axios"

const API_KEY = "ccba704a8d611c23be2467c40c4aa9ea"

const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}`,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default api