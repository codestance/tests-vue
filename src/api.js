import axios from 'axios';
const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/GKJG6iANsshGd8xC5yyo8JBZkUEdvI6l',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};
export default api;
