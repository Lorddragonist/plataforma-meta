import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="w-full flex justify-between items-center">
        <li className="h-10">
          <img
            src="https://res.cloudinary.com/dehfpzadt/image/upload/v1726258488/Claro_rojo_w5km9k.png"
            alt="Logo de Claro"
            className="h-full w-auto object-cover"
          />
        </li>
        <ul className="font-sans font-semibold flex w-auto gap-x-4 text-white">
          <li>Soluciones</li>
          <li>Noticias de Interés</li>
          <li>Ingresar</li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
