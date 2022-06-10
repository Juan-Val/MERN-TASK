import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";
import clienteAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Las funciones

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta.data);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
    } catch (error) {
      // console.log(error.response);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: Funcion para enviar el token por headers
    }

    try {
      const respuesta = await clienteAxios.get("/api/usuarios/auth");
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
