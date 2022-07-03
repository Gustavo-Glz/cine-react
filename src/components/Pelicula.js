import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { peliculaById } from '../api/funciones';

const Pelicula = () => {
  let { id } = useParams();
  const [pelicula, setPelicula] = useState({})

  useEffect(() => {
    peliculaById(id, setPelicula)
  }, [id])

  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col gap-4">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
          alt="img"
          className="max-w-sm"
        />
        <div className="px-2 flex flex-col gap-2">
          <h2 className="text-gray-900 text-xl font-semibold">{pelicula.title}</h2>
          <h3 className="text-sky-700 font-medium">Summary</h3>
          <p className="text-gray-700 text-sm font-medium">{pelicula.overview}</p>
          <p className="text-gray-800 font-semibold">Release date: <span className="text-gray-600">{pelicula.release_date}</span></p>
        </div>
      </div>
    </section>
  );
}

export default Pelicula;