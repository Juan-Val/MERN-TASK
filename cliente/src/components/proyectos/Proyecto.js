import React from "react";

export const Proyecto = ({ proyecto }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {proyecto.nombre}
      </button>
    </li>
  );
};
