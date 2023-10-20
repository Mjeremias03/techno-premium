import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { fadeIn } from "../About/Framer";
import { motion } from "framer-motion";
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);


const hanldeNav = (e) =>{
setShowMenu(!showMenu)
}
  return (
    <motion.header
    variants={fadeIn(1, 1)} 
    initial="hidden"
    animate="visible"
    transition={{ duration: 2 }}
    exit="hidden"
    className="flex justify-between  items-center bg-black flex-wrap p-1 fixed h-16 mx-auto px-4 z-50 w-full"
  >
      <div className=" flex justify-center h-full  items-center">
        <img src="/nuevo.jpg" alt="" className="h-16 object-contain" />
        <h1 className="text-black">Techno Premium</h1>
      </div>
        <ul className="hidden gap-5 font-Gothic-A1 md:flex">
        <li className=" hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white pt-8"> <a href="#contactanos">Contactanos</a></li>
        <li  className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white pt-8"><a href="/about">Nosotros</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white pt-8"> <a href="#stock">Stock</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white pt-8"><a href="#clientes">Cliente</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white pt-8"><a href="#Servicios">Servicios</a></li>
      </ul>
      <div onClick={hanldeNav} className="block md:hidden ">
      {showMenu ? <AiOutlineMenu className="hover:cursor-pointer text-white" size={20} /> : <AiOutlineClose  className="hover:cursor-pointer text-white"  size={20} />}
      </div>
      <div className={!showMenu ? "fixed left-0 top-0 w-[60%] h-screen border-r md:hidden ease-in-out duration-500  bg-black" : "fixed left-[-100%]"}>
    <img src="/nuevo.jpg" alt="" className="h-16 object-contain" /> 
        <ul className="p-6 uppercase">
        <li className=" hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer border-b border-indigo-700 text-white pt-8 "> <a href="#contactanos">Contactanos</a></li>
        <li  className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer border-b border-indigo-700 text-white pt-8"><a href="/about">Nosotros</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white border-b border-indigo-700 pt-8"> <a href="#stock">Stock</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white border-b border-indigo-700 pt-8"><a href="#clientes">Cliente</a></li>
        <li className="hover:text-indigo-800 transition-all duration-500 hover:cursor-pointer text-white border-b border-indigo-700 pt-8"><a href="#Servicios">Servicios</a></li>
        </ul>
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/technopremiumcba/" target="_blank">
            <img src="/inst.png" alt="Redes sociales" />
          </a>
          <a href="/face">
            <img src="/face.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className=" hidden md:flex justify-center items-center">
          <a href="https://www.instagram.com/technopremiumcba/" target="_blank">
            <img src="/inst.png" alt="Redes sociales" />
          </a>
          <a href="/face">
            <img src="/face.png" alt="Facebook" />
          </a>
        </div>
       </motion.header>
  );
};

export default Header;
