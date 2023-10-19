import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scroll = (e) => {
    e.preventDefault();
    const target = document.querySelector("#stock");
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <header className="flex justify-between  items-center bg-black   p-1 fixed h-16 z-50 w-full"> {/* Aumentamos el alto del header */}
      <div className="p-4 flex justify-center items-center h-full">
        <img src="/nuevo.jpg" alt="" className="h-16 object-contain" />
        <h1></h1>
      </div>
      <nav
        className={`z-10 fixed ${
          showMenu ? "w-[80%] md:w-[40%] xl:w-[80%]" : "w-0"
        } gap-8 md:gap-16 top-16 transition-all duration-300 md:static flex-1 flex ${
          showMenu ? "flex-col h-screen bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 justify-center items-center" : ""
        } md:flex-wrap justify-end h-full items-end`} 
      >
        <div className="flex md:flex-wrap justify-center mr-20 items-center  md:gap-8">
          <a href="#home" className="text-white font-medium text-xl text-center cursor-pointer hover:transition duration-300" onClick={scroll}>
            Stock
          </a>
          <a href="#home" className="text-white font-medium text-xl  text-center cursor-pointer">
            Nosotros
          </a>
          <a href="#Clientes" className="text-white font-medium text-xl text-center cursor-pointer">
            Clientes
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/technopremiumcba/" target="_blank">
            <img src="/inst.png" alt="Redes sociales" />
          </a>
          <a href="/face">
            <img src="/face.png" alt="Facebook" />
          </a>
        </div>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="text-white md:hidden text-2xl p-3">
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </header>
  );
};

export default Header;
