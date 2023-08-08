const axios = require('axios');

// Esta función obtiene un posteo específico de la API de JSONPlaceholder.
const obtenerPosteo = async (postID) => {
   try {
      const URL = `https://jsonplaceholder.typicode.com/posts/${postID}`;

      const post = (await axios(URL)).data;
      const status = (await axios(URL)).status;
      return { status: status, post: post};
   } catch (err) {
      
      else console.error(err.message);
      return null;
   }
};

obtenerPosteo(1231231231).then((post) => console.log(post)); // 200 + { object Post 1 }
// obtenerPosteo('Lorem Ipsum').then((post) => console.log(post)); // 404 + null

module.exports = obtenerPosteo;
