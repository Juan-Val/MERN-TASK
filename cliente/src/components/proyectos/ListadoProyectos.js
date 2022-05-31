import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Proyecto } from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";

export const ListadoProyectos = () => {
  // Extraer proyectos del state inicial
  const proyectosContes = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContes;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  // Revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={500} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};
