import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./Componentes/Detail/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCelulares } from "./Redux/Actions";
import { useLocation } from "react-router-dom";
import Nosotros from "./Componentes/About/Nosotros";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCelulares());
  }, []);

  // Verifica si la ubicación actual es la ruta "/about".
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="h-screen flex flex-col">
      {/* Renderiza el componente Header solo si no estás en la página "/about". */}
      {!isAboutPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;

