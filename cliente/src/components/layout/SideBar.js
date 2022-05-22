import React from "react";
import { ListadoProyectos } from "../proyectos/ListadoProyectos";
import { NuevoProyecto } from "../proyectos/NuevoProyecto";

export const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN <span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};
