import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbSortDescending } from "react-icons/tb";

function Carrosel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={false}
      centeredSlides={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => ""}
      className="w-full h-full"  
      autoplay={{ delay: 6000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className="relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="image (1).jpg"
            alt="11"
          />
          <div className="absolute top-0 left-0 sm:w-full mt-12 ml-16 md:mt-0 md:ml-0 h-full flex flex-col justify-center items-center">
            <span className="text-1xl md:text-3xl text-white font-extrabold font-libre-baskerville">¡Bienvenido a nuestro mundo móvil!</span>
            <h1 className="text-2xl md:text-5xl text-indigo-700 font-libre-baskerville font-extrabold">Somos Techo Premium</h1>
            <a className="p-4 text-white text-center" href="#Home">
              <div className="text-xs sm:text-4xl md:text-5xl text-white">
                <TbSortDescending size="30" className="hover:text-indigo-800 hover:cursor-pointer transition-all" />
              </div>
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="iphone11.webp"
            alt="11"
          />
          {/* Contenido adicional si es necesario */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="x.jpg"
            alt="11"
          />
          {/* Contenido adicional si es necesario */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="iphone 15.jpg"
            alt="11"
          />
          {/* Contenido adicional si es necesario */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrosel;
