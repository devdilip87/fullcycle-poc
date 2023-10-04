const axios = require('axios');

const root = {
  cars: async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/cars');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = root;
  