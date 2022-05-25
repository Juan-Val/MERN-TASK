import React, { useContext, useEffect } from "react";
import { Proyecto } from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";

export const ListadoProyectos = () => {
  // Extraer proyectos del state inicial
  const proyectosContes = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContes;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};
