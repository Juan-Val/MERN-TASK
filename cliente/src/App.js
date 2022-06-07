import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Proyectos } from "./components/proyectos/Proyectos";

import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AuthState>
          <BrowserRouter>
            <AlertaState>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
                <Route path="/Proyectos" element={<Proyectos />} />
              </Routes>
            </AlertaState>
          </BrowserRouter>
        </AuthState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
