const express = require("express");
const app = express();

const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHora = require("./middlewares/validarHora");

const indexRouter = require("./routes/index");
const endrouteRouter = require("./routes/endroute");

app.use(horaMiddleware);

app.use("/endroute", validarHora, endrouteRouter);

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});