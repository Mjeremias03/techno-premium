const express = require("express");
const app = express();
const path = require("path");
const route = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");

// Habilitar solicitudes CORS solo desde un origen específico (reemplaza 'https://techno-premium.vercel.app' con tu dominio)
const corsOptions = {
  origin: "https://techno-premium.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(morgan("dev"));
app.use(express.json());

// Habilitar CORS con las opciones personalizadas
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));
app.use(route);

module.exports = app;
