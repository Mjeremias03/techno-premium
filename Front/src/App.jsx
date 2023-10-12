import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";
import { Route,Routes } from "react-router-dom";
import Detail from "./Componentes/Detail/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCelulares } from "./Redux/Actions";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCelulares());
  },[])
  return (
  <div className="h-screen flex flex-col  ">
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
  </Routes>
</div>

  );
}

export default App;
