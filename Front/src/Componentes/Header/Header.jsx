import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scroll = (e) => {
    e.preventDefault(); // Evitar que el enlace recargue la página
    const target = document.querySelector("#stock"); // Obtener el elemento al que deseas desplazarte
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <header className="flex justify-between xl:justify-center items-center bg-white border-b p-1 border-gray-200 fixed h-20 z-50 w-full ">
      <div className=" p-4 flex justify-center items-center h-full">
        <img src="/nuevo.jpg" alt="" className="h-20 object-contain" />
        <h1></h1>
      </div>
      <nav
        className={`z-10 fixed w-[80%] md:w-[40%] xl-[80%] ${
          showMenu ? "left-0" : "-left-full"
        } gap-8 md:gap-16 h-full top-0 transition-all duration-300 md:static flex-1 flex ${
          showMenu ? "flex-col  bg-black justify-center items-center" : ""
        } md:flex-wrap  justify-end items-end `}
      >
        <div className="flex md:flex-wrap justify-center mr-20 items-center gap-4 md:gap-8">
          <a
            href="#home" // Asegúrate de que el href apunte al ID de la sección
            className="text-black font-medium text-2xl text-center cursor-pointer hover: transition duration-300"
            onClick={scroll}
          >
            Stock
          </a>

          <a
            href="#home" // Asegúrate de que el href apunte al ID de la sección
            className="text-black font-medium text-2xl text-center cursor-pointer"
          >
            Nosotros
          </a>
          <a
            href="#cliente" // Asegúrate de que el href apunte al ID de la sección
            className="text-black font-medium text-2xl text-center cursor-pointer"
          >
            Clientes
          </a>
        </div>
<div className="flex items-end justify-end">
  <a href="https://www.instagram.com/technopremiumcba/" target="_blank">
    <img src="/inst.png" alt="Redes sociales" />
  </a>
  <a href="/face">
    <img src="/face.png" alt="Facebook" />
  </a>
</div>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-indigo-950 md:hidden text-2xl p-3"
      >
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  );
};

export default Header;
