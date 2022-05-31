import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContex";

export const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // Obtener las tareas del proyecto actual
  const tareasContext = useContext(TareaContext);
  const { obternerTares } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //Fijar el proyecto actual
    obternerTares(id); //Filtrar las tareas del proyecto actual
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};
