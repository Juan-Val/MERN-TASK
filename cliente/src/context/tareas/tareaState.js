import { useReducer } from "react";
import { TareaContext } from "./tareaContex";
import tareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataforma", estado: false, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
    ],
    tareasproyecto: null,
  };

  // Crear dispatch y state

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Crear funciones para el CRUD
  // Obterner las tareas de un proyecto

  const obternerTares = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obternerTares,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
