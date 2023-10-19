import { useSelector } from "react-redux";
import React, { useState } from "react";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = () => {
  const celulares = useSelector((state) => state.celulares);
  const elementosPorPagina = 8;

  // Estado para la página actual
  const [paginaActual, setPaginaActual] = useState(1);

  // Función para manejar el cambio de página
  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  // Calcular el índice inicial y final de los elementos en la página actual
  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = paginaActual * elementosPorPagina;

  // Filtrar los celulares para la página actual
  const celularesPaginaActual = celulares.slice(indiceInicial, indiceFinal);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {celularesPaginaActual.map((el) => (
          <div
            className="border h-full border-gray-200 rounded-lg shadow-md p-4 relative hover:shadow-lg transition-transform transform hover:scale-105"
            key={el.id}
          >
           
              <div className="relative">
                  <div
                    className="w-full h-full absolute top-0 left-0 bg-black opacity-10"
                  ></div>
                <div className="w-full h-80 relative">
                  <img
                    src={el.imagenes[0]}
                    alt={el.marca}
                    className="w-full object-contain h-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl text-shadow-md">
                      {el.marca}
                    </h1>
                    <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl text-shadow-md">
                      {el.modelo}
                    </h2>
                    <a
                      href={`https://wa.me/543516203444?text=¡Hola! Estoy interesado en el ${el.modelo}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium mt-4 hover:text-blue-500"
                    >
                      ¡Contáctame en WhatsApp!
                    </a>
                  </div>
                </div>
              </div>
          
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
          className={`text-gray-600 hover:text-gray-800 hover:cursor-pointer text-2xl p-2 rounded-full transition duration-300 ${
            paginaActual === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <AiFillBackward size="36" />
        </button>
        <span className="text-black text-xl ml-6 mr-6">
          {paginaActual} de {Math.ceil(celulares.length / elementosPorPagina)}
        </span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={indiceFinal >= celulares.length}
          className={`text-gray-600 hover:text-gray-800 hover:cursor-pointer text-2xl p-2 rounded-full transition duration-300 ${
            indiceFinal >= celulares.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <AiFillForward size="36" />
        </button>
      </div>
    </div>
  );
};

export default Card;

