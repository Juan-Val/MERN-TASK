import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Proyectos } from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="/Proyectos" element={<Proyectos />} />
          </Routes>
        </BrowserRouter>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
