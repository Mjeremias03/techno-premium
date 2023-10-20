import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./Componentes/Detail/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCelulares } from "./Redux/Actions";
import { useLocation } from "react-router-dom";

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
      {!isAboutPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

