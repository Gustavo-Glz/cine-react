import { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../api/funciones';
import star from '../star.svg'

const Home = ({ peliculas }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [buscar, setBuscar] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [buscador, setBuscador] = useState([]);

  let resultado = [];
  let filtrados = [];

  const busqueda = (e) => {
    e.preventDefault();
    setBuscador([]);
    setBuscar(e.target.value)
  }
  const filtrar = (rating, resultado) => {
    switch (rating) {
      case 1:
        filtrados = resultado.filter(pelicula => pelicula.vote_average >= 0 && pelicula.vote_average <= 2)
        break;
      case 2:
        filtrados = resultado.filter(pelicula => pelicula.vote_average > 2 && pelicula.vote_average <= 4)
        break
      case 3:
        filtrados = resultado.filter(pelicula => pelicula.vote_average > 4 && pelicula.vote_average <= 6)
        break
      case 4:
        filtrados = resultado.filter(pelicula => pelicula.vote_average > 6 && pelicula.vote_average <= 8)
        break
      case 5:
        filtrados = resultado.filter(pelicula => pelicula.vote_average > 8 && pelicula.vote_average <= 10)
        break
      default:
        break;
    }
    setFiltro(filtrados)
  }

  if (buscar !== "") {
    resultado = buscador
  } else {
    resultado = peliculas;
  }


  return (
    <main>
      <section className="h-[35rem] bg-[url(./hero.jpg)] bg-center">
        <div className="container mx-auto h-full flex flex-col gap-5 justify-center">
          <h2 className="text-3xl text-white">Lo mas nuevo del cine aqui</h2>
          <p className="text-gray-100 text-xl">Consulta las peliculas del momento</p>
          <input type="text" placeholder="Buscar" className="p-2 rounded-md md:w-1/2 lg:w-1/3" value={buscar} onChange={busqueda} />
          <button className="text-white" onClick={() => search(buscar, setBuscador)}>Buscar</button>
        </div>
      </section>
      <section>
        <h3 className="container mx-auto my-10 text-gray-800 text-xl font-semibold">
          Peliculas populares
        </h3>
        <div className="container mx-auto">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                value={index}
                type="button"
                key={index}
                className={index <= (hover || rating) ? "text-yellow-600" : "text-gray-500"}
                onClick={() => {
                  setRating(index);
                  filtrar(index, resultado)
                }
                }
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span>&#9733;</span>
              </button>
            );
          })}
        </div>
        <div className="container mx-auto my-10 grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {resultado.map(pelicula => (
            <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}>
              <div className="bg-white shadow-lg rounded-md cursor-pointer flex flex-col justify-between md:h-[25rem]">
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt="img" className="rounded-t-md" />
                <h2 className="text-gray-900 font-semibold px-2 py-1 text-sm">{pelicula.title}</h2>
                <div className="flex items-center gap-1.5 px-2 py-1">
                  <img src={star} alt="start" />
                  <p className="text-sm text-gray-700 font-semibold">{pelicula.vote_average}/10</p>
                </div>
              </div>
            </Link>
          ))
          }
        </div>
      </section>
    </main>
  );
}

export default Home;