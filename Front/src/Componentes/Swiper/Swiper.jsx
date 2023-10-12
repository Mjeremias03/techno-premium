import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import{TbSortDescending} from "react-icons/tb"
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
      className="w-full mt-20 h-56 sm:h-[40%] md:h-[40%] lg:h-[40%] xl:h-[90%]"
      autoplay={{ delay: 6000, disableOnInteraction: false }}
    >
 <SwiperSlide>
  <div className="relative">
    <img
      className="w-full h-full object-cover object-center"
      src="image (1).jpg"
      alt="11"
    />
    <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-center items-center">
      <span className="text-5xl text-indigo-700 font-extrabold font-libre-baskerville">Bienvenido</span> <h1 className="text-5xl text-white font-libre-baskerville font-extrabold ">Somos Tech Premium Cba</h1>
    <a className="p-4 text-white " href="#Home">
  <TbSortDescending size="50" className="hover:text-indigo-800 hover:cursor-pointer transition-all" />
</a>
    </div>
  </div>
</SwiperSlide>



<SwiperSlide>
  <div className="relative">
    <img
      className="w-full h-full object-cover object-center"
      src="iphone11.webp"
      alt="11"
    />
    {/* <div className="absolute top-0 left-0 w-full mt-72 h-1/2 flex flex-col justify-center items-center">
    <a className="p-4 text-black mt-96" href="#Home">
  <TbSortDescending size="50" className="hover:text-indigo-800 hover:cursor-pointer transition-all" />
</a>
    </div> */}
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative">
    <img
      className="w-full h-full object-cover object-center"
      src="x.jpg"
      alt="11"
    />
  {/* <div className="absolute top-0 mt-56 left-0 w-full h-1/2 flex flex-col justify-center items-center">
  <a className="p-4 text-black mt-96" href="#Home">
  <TbSortDescending size="50" className="hover:text-indigo-800 hover:cursor-pointer transition-all" />
</a>
</div> */}
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative">
    <img
      className="w-full h-full object-cover object-center"
      src="iphone 15.jpg"
      alt="11"
    />
    {/* <div className="absolute top-0  mt-56 left-0 w-full h-1/2 flex flex-col justify-center items-center">
    <a className="p-4 text-black mt-96" href="#Home">
  <TbSortDescending size="50" className="hover:text-indigo-800 hover:cursor-pointer transition-all" />
</a>
    </div> */}
  </div>
</SwiperSlide>
    </Swiper>
  );
}

export default Carrosel;
