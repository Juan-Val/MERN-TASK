import React, { useContext } from "react";
import { useEffect } from "react";
import authContext from "../../context/autenticacion/authContext";
import { Barra } from "../layout/Barra";
import { SideBar } from "../layout/SideBar";
import { FormTarea } from "../tasks/FormTarea";
import { ListadoTareas } from "../tasks/ListadoTareas";

export const Proyectos = () => {
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  // Revisar si tenemos un token
  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};
