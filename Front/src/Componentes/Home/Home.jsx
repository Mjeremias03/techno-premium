import Carrosel from "../Swiper/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCelulares, getCelularesId} from "../../Redux/Actions";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Clientes from "../Clientes/Clientes";
import Publicidad from "../Publicidad/About";
import Servicios from "../Servicios/Servicios";
import Contacto from "../Contacto/Contacto";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getCelulares());
        await dispatch(getCelularesId())
      } catch (error) {
        console.error("Error al obtener celulares:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="h-screen w-full">
      <Carrosel />
      <div className="relative" id="Home">
        <Publicidad />
      </div>
      <div
        id="stock"
        className="w-[80%]   mt-52 mx-auto flex justify-center flex-col items-center "
      >
        <h1 className="text-5xl mt-7 text-center ">
          <span className="border-b font text-center text-black font-libre-baskerville border-black pb-2 pr-4 pl-4">
            Productos Destacados
          </span>
        </h1>
        <div className="  w-full mt-8 flex justify-center items-center flex-wrap shadow-md p-4 rounded-md">
          <Card />
        </div>
      </div>

        <Clientes/>
      <Servicios/>
      <Contacto/>
      <Footer />
    </div>
  );
};

export default Home;
