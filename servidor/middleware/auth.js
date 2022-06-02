const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Leer el tokem del header
  const token = req.header("x-auth-token");

  // Revisar si viene el token
  if (!token) {
    return res.status(401).json({ msg: "No hay token, permiso denegado" });
  }
  // Validar el token

  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no valido" });
  }
};
