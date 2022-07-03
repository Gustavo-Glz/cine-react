import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pelicula from './components/Pelicula';
import Header from './components/Header';
import { peliculasPopulares } from './api/funciones';
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    peliculasPopulares(setPeliculas)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home peliculas={peliculas}/>} />
        <Route path='/peliculas/:id' element={<Pelicula />} />
        <Route path='*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
