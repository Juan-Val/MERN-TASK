const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.crearUsuario = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extrar email y password
  const { email, password } = req.body;

  try {
    // Revisar que no exista el usuario
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crea el nuevo usuario
    usuario = new Usuario(req.body);

    // Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    // Guarda el usuario en la base de datos
    await usuario.save();

    // Envía una respuesta
    res.status(200).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
