import React, { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../../context/autenticacion/authContext";

export const RutaPrivada = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { cargando, autenticado, usuarioAutenticado } = AuthContext;

  // Revisar si tenemos un token
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return <>{!autenticado && !cargando ? <Navigate to="/" /> : children}</>;
};
