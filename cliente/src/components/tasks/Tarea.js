import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TareaContext } from "../../context/tareas/tareaContex";

export const Tarea = ({ tarea }) => {
  // Obtener las tareas del proyecto actual
  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obternerTares,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareasContext;

  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extrar el proyecto actual
  const [proyectoActual] = proyecto;
  // Funcion que se ejecuta cuando el usuario presiona el boton para eliminar una tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obternerTares(proyectoActual.id);
  };

  // Funcion que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  // Agrega una tarea cuando el usuario presiona el boton
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };
  return (
    <>
      <li className="tarea sombra">
        <p>{tarea.nombre}</p>
        <div className="estado">
          {tarea.estado ? (
            <button
              type="button"
              className="completo"
              onClick={() => cambiarEstado(tarea)}
            >
              Completo
            </button>
          ) : (
            <button
              type="button"
              className="incompleto"
              onClick={() => cambiarEstado(tarea)}
            >
              Incompleto
            </button>
          )}
        </div>
        <div className="acciones">
          <button
            type="button"
            className="btn btn-primario"
            onClick={() => seleccionarTarea(tarea)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-secundario"
            onClick={() => tareaEliminar(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      </li>
    </>
  );
};
