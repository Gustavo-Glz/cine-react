import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { peliculaById } from "../api/funciones";

const Pelicula = () => {
  let { id } = useParams();
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    peliculaById(id, setPelicula);
  }, [id]);

  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
          alt="img"
          className="max-w-sm"
        />
        <div className="px-2 flex flex-col gap-2">
          <h2 className="text-gray-900 text-xl font-semibold lg:text-3xl">
            {pelicula.title}
          </h2>
          <h3 className="text-sky-700 font-medium">Summary</h3>
          <p className="text-gray-700 text-sm font-medium">
            {pelicula.overview}
          </p>
          <p className="text-gray-800 text-lg font-semibold">
            Release date:
            <span className="text-gray-600 px-2">{pelicula.release_date}</span>
          </p>
          <div className="flex items-center gap-2">
            <h3 className="text-lg text-gray-900 font-semibold">Rating</h3>
            <span className="text-2xl text-yellow-500">&#9733;</span>
            <p className="text-sm text-gray-700 font-semibold">
              {pelicula.vote_average}/10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pelicula;
