import { useSelector } from "react-redux";
import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdNavigateNext } from "react-icons/md";
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
console.log(celulares)
  return (
    <><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 mx-4">
      {celularesPaginaActual.map((el) => (
        <div className="w-full" key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <div className="hover:shadow-black/30 bg-white rounded-lg border border-gray-200 shadow-md p-4 text-center transition duration-200 ease-in-out">
              <div className="w-64 h-64 mx-auto">
                <img
                  src={el.imagenes[0]}
                  alt={el.marca}
                  className="w-full h-full object-contain" />
              </div>
              <h1 className="text-black text-center font-bold">{el.marca}</h1>
              <h1 className="text-black text-center">{el.modelo}</h1>
              <h1 className="text-black text-center">${el.precio}</h1>
            </div>
          </Link>
        </div>
      ))}



    </div><div className="w-full mt-12 flex items-center justify-center">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <span className="rounded-md text-black">{paginaActual}</span>
        <span> de {(celulares.length / elementosPorPagina)}</span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={indiceFinal >= celulares.length}
        >
          <MdNavigateNext size="30" />
        </button>
      </div></>
  );
};

export default Card;
