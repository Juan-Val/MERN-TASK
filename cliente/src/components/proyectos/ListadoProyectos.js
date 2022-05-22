import React from "react";
import { Proyecto } from "./Proyecto";

export const ListadoProyectos = () => {
  const proyectos = [
    { id: 1, nombre: "Tareas React" },
    { id: 2, nombre: "Tareas Vue" },
    { id: 3, nombre: "Tareas Node" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};
