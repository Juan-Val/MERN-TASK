// Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require("express-validator");

// Crea un usuarios
// /api/usuarios
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check(
      "password",
      "El password dede ser minimo de minimo 6 caracteres"
    ).isLength({ min: 6 }),
  ],
  usuarioController.crearUsuario
);

module.exports = router;
