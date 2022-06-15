import React, { useContext, useEffect } from "react";
import authContext from "../../context/autenticacion/authContext";

export const Barra = () => {
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  // Revisar si tenemos un token
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          {" "}
          Cerrar sesion
        </button>
      </nav>
    </header>
  );
};
