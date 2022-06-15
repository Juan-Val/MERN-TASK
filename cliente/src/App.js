import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/auth/Login";
import { NuevaCuenta } from "./components/auth/NuevaCuenta";
import { Proyectos } from "./components/proyectos/Proyectos";
import { RutaPrivada } from "./components/routes/RutaPrivada";
import tokenAuth from "./config/tokenAuth";

import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  // Revisar si tenemos un token
  const token = localStorage.getItem("token");
  // Si no tenemos token, redireccionar a login
  if (token) {
    tokenAuth(token);
  }

  return (
    <ProyectoState>
      <TareaState>
        <AuthState>
          <BrowserRouter>
            <AlertaState>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
                <Route
                  path="/proyectos"
                  element={
                    <RutaPrivada>
                      <Proyectos />
                    </RutaPrivada>
                  }
                />
              </Routes>
            </AlertaState>
          </BrowserRouter>
        </AuthState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
