import React from "react";
import { Barra } from "../layout/Barra";
import { SideBar } from "../layout/SideBar";
import { FormTarea } from "../tasks/FormTarea";
import { ListadoTareas } from "../tasks/ListadoTareas";

export const Proyectos = () => {
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
