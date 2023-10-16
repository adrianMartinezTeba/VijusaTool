const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que el nombre de usuario sea único
  },
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que el correo electrónico sea único
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Roles de usuario
    default: "user", // Rol predeterminado
  },
  createdAt: {
    type: Date,
    default: Date.now, // Fecha de creación del usuario
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Fecha de última actualización
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
