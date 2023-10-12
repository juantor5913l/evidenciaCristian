const axios = require('axios');

const url = 'https://api.escuelajs.co/api/v1/users';

const usuarios = async() => {
    const response = await axios.get(url);
    const usuario = response.data[1];
    console.log(usuario.name);
};

usuarios();
