import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header className=" h-20 bg-sky-600">
        <div className="container mx-auto h-full flex items-center justify-between">
          <h1 className="text-3xl text-white font-bold">MiCine</h1>
          <nav>
            <ul className="flex items-center gap-5">
              <li className="text-white text-sm font-medium uppercase">
                <NavLink to='/' className={({ isActive }) => isActive ? "bg-slate-100/30 rounded p-1.5" : "p-1.5"}>Inicio</NavLink>
              </li>
              {/* <li className="text-white text-sm font-medium uppercase">
                <NavLink to='/peliculas' className={({ isActive }) => isActive ? "bg-slate-100/30 rounded p-1.5" : "p-1.5"}>Peliculas</NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Header;