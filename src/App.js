import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pelicula from './components/Pelicula';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/peliculas/:id' element={<Pelicula />} />
        <Route path='*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
