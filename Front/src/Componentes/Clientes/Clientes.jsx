import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Clientes = () => {
  return (
    <div className="p-6 md:p-12 lg:p-24 bg-gradient-to-r from-rose-100 to-teal-100 mt-28 flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-semibold font-serif text-indigo-800 mb-4">¿Por qué elegir TechPremium CBA?</h1>
        <p className="text-lg md:text-xl font-serif mb-4">Porque tu satisfacción es nuestra prioridad.</p>
        <p className="text-sm md:text-base">
          En TechPremium CBA, estamos comprometidos a brindarte un servicio excepcional con una sonrisa. Nos enorgullece ofrecer:
        </p>
        <ul className="list-disc pl-4">
          <li>Productos de alta calidad y tecnología avanzada.</li>
          <li>Un equipo amigable y servicial que siempre está aquí para ayudarte.</li>
          <li>Garantía de satisfacción total en cada compra.</li>
          <li>La confianza y tranquilidad de saber que estamos para ti, en cada paso del camino.</li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8">
        <h1 className="font-alfa-slab-one text-center text-2xl border-t-1">Clientes Satisfechos</h1>
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
            className="w-1/2 h-64 sm:h-80 md:h-96 lg:h-96"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/carli.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/clientes/facu.jfif"
                  className="max-h-full max-w-full"
                  alt="Cliente 2"
                />
              </div>
            </SwiperSlide>
            {/* Agregar más imágenes de clientes satisfechos aquí */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
