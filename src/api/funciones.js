import axios from 'axios'

const peliculasPopulares = async (state) => {
  const peticion = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1236d982e59e7fca8ee07ee7b705fd06');
  state(peticion.data.results);
};

const search = async (buscar, state) => {
  const peticion = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1236d982e59e7fca8ee07ee7b705fd06&query=${buscar}`);
  state(peticion.data.results);
};

const peliculaById = async (id, state) => {
  const peticion = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1236d982e59e7fca8ee07ee7b705fd06`);
  state(peticion.data);
};

export { peliculasPopulares, peliculaById, search }