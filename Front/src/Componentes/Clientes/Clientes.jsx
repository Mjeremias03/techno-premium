import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Clientes = () => {
  return (
    <div id="clientes" className="p-6 md:p-12 lg:p-24 bg-gradient-to-r mt-36 items-center bg-gray-200 flex flex-wrap justify-center">
      <div className="w-full  left-0 lg:w-1/2 p-4 md:p-6 lg:p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-semibold font-serif text-indigo-800 mb-4">¿Por qué elegir TechPremium CBA?</h1>
        <p className="text-lg md:text-xl font-serif mb-4">Porque tu satisfacción es nuestra prioridad.</p>
        <p className="text-sm md:text-base mb-4">
          En TechPremium CBA, estamos comprometidos a brindarte un servicio excepcional con una sonrisa. Nos enorgullece ofrecer:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Productos de alta calidad y tecnología avanzada.</li>
          <li>Un equipo amigable y servicial que siempre está aquí para ayudarte.</li>
          <li>Garantía de satisfacción total en cada compra.</li>
          <li>La confianza y tranquilidad de saber que estamos para ti, en cada paso del camino.</li>
          <li>Dispositivos con cargadores incluidos para una experiencia completa.</li>
          <li>Equipos a precios accesibles que se adaptan a tu presupuesto.</li>
          <li>La mejor selección de celulares usados, ofreciendo calidad y ahorro.</li>
        </ul>
        <p className="mt-7 font-black text-center text-lg mdtext-2xl md:text-base">
  ¡Estamos comprometidos a brindarte todo lo que necesitas para estar conectado y satisfecho con tus productos tecnológicos!
</p>

      </div>
   <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8">
        <h1 className=" font-black text-indigo-700 text-center text-2xl border-t-1">Clientes Satisfechos</h1>
        <div className="flex justify-center w-full items-center mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => ""}
            className="w-full h-full sm:h-80 md:h-96 lg:h-96"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/carli.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/facu.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/gringo.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/lautaro.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/guada.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/guille.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/lucho.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/ramiro.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/tobi.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </div>
  
  );
};

export default Clientes;
