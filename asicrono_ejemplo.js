const axios = require('axios');

const url = 'https://api.escuelajs.co/api/v1/users';

axios.get(url).then(response => {
    console.log('Datos de usuarios:', response.data);
    console.log('Datos de usuarios:', response.name);
    console.log('-----------------')
  })
  .catch(error => {
    console.error('Hubo un error al hacer la solicitud:', error);
  });
