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
import { fadeIn, fadeInFromLeft } from "../About/Framer";
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
    <motion.div
      className="relative"
      variants={fadeInFromLeft(2, 1)} // Aplica las variantes fadein(2,1)
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Publicidad />
    </motion.div>
    <motion.div
  id="stock"
  className="w-full  mt-52 mx-auto flex justify-center flex-col items-center "
  variants={fadeInFromLeft(2, 1)} // Aplica las variantes fadein(2,1)
  initial="hidden"
  animate="visible"
  exit="hidden"
>
  <h1 className="text-5xl mt-15 text-center text-black font-extrabold">
    Descubre Nuestra Selección Exclusiva
  </h1>

  <div className=" h-full w-full mt-8 flex justify-center items-center flex-wrap shadow-md p-4 rounded-md">
    <Card />
  </div>
</motion.div>

  
    <motion.div variants={fadeInFromLeft(2, 1)} initial="hidden" animate="visible" exit="hidden">
      <Clientes />
    </motion.div>
  
    <motion.div variants={fadeInFromLeft(2, 1)} className="" initial="hidden" animate="visible" exit="hidden">
      <Servicios />
    </motion.div>
  
    <motion.div variants={fadeInFromLeft(2, 1)} initial="hidden" animate="visible" exit="hidden">
      <Contacto />
    </motion.div>
  
    <motion.div variants={fadeInFromLeft(2, 1)} initial="hidden" animate="visible" exit="hidden">
      <Footer />
    </motion.div>
  </div>
  
  );
};

export default Home;
