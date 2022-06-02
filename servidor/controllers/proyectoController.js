const Proyecto = require("../models/proyecto");

exports.crearProyecto = async (req, res) => {
  try {
    // Crear un nuevo proyecto
    const proyecto = new Proyecto(req.body);

    // Guardar el creador via JWT
    proyecto.creador = req.usuario.id;

    // Guardar el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
