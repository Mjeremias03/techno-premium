import Carrosel from "../Swiper/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCelulares, getCelularesId } from "../../Redux/Actions";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Clientes from "../Clientes/Clientes";
import Publicidad from "../Publicidad/About";
import Servicios from "../Servicios/Servicios";
import Contacto from "../Contacto/Contacto";
import { fadeIn } from "../About/Framer";
import { motion } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getCelulares());
        await dispatch(getCelularesId());
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
        className="w-full  mt-52 mx-auto flex justify-center flex-col items-center "
      >
        <h1 className="text-5xl mt-15 text-center text-black font-extrabold">
          Descubre Nuestra Selección Exclusiva
        </h1>

        <div className=" h-full w-full mt-8 flex justify-center items-center flex-wrap shadow-md p-4 rounded-md">
          <Card />
        </div>
      </div>

      <Clientes />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
