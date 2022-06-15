import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Proyecto } from "./Proyecto";

import proyectoContext from "../../context/proyectos/proyectoContext";
import alertaContext from "../../context/alertas/alertaContex";

export const ListadoProyectos = () => {
  // Extraer proyectos del state inicial
  const proyectosContes = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContes;

  const AlertaContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = AlertaContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categorita);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

  // Revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categorita}`}>{alerta.mensaje}</div>
      ) : null}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={500} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};
