import React, { useState } from "react";

export const NuevoProyecto = () => {
  // state para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.value]: e.target.value,
    });
  };

  // extraer nombre del proyecto
  const { nombre } = proyecto;

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el proyecto

    // agregar al state

    // Reiniciar el form
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form
        action=""
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar proyecto"
        />
      </form>
    </>
  );
};
