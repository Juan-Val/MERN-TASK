// Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");

// Crea un usuarios
// /api/auth
router.post("/", [
  check("email", "El email es obligatorio").isEmail(),
  check(
    "password",
    "El password dede ser minimo de minimo 6 caracteres"
  ).isLength({ min: 6 }),
  authController.autenticarUsuario,
]);

module.exports = router;
