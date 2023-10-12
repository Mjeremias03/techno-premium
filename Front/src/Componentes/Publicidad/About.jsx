import React from 'react';

const Publicidad = () => {
  return (
    <div id="home" className="bg-gray-200 p-6 md:p-12 lg:p-24 flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2  p-4 md:p-6 lg:p-8 rounded-xl ">
        <h1 className="text-3xl md:text-4xl font-semibold font-serif text-indigo-800 mb-4">Próximamente</h1>
        <p className="text-lg md:text-xl font-serif mb-4">iPhone 15 Pro Max</p>
        <p className="text-sm md:text-base">
          La pantalla Super Retina XDR de 6.7 pulgadas con ProMotion aumenta la frecuencia de actualización hasta 120 Hz cuando necesitas el máximo rendimiento gráfico.
        </p>
        <p className="text-sm md:text-base">
          Diseño resistente y ligero.
          Pantalla Super Retina XDR con ProMotion, con frecuencia de actualización de hasta 120 Hz.
          La Dynamic Island muestra alertas y actividades en vivo al instante.
          Sistema de cámaras de super alta resolución.
          Botón de acción personalizable para ir a tu funcionalidad favorita.
          Con conector USB-C y WiFi 6 con el doble de velocidad.
          Funcionalidad esencial de seguridad con detección de choques para pedir ayuda.
          Con tecnologías de privacidad que te ayudan a mantener el control de tus datos.
        </p>
      </div>
      <div className="w-full lg:w-1/2 text-center">
        <img
          src="iphone15remo.png"
          alt="Logo de la empresa"
          className="w-full md:w-[70%] h-auto mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Publicidad;
