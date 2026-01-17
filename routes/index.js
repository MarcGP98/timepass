const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mensaje = req.query.mensaje;

  res.send(`
    <h1>Bienvenido</h1>
    <p>Hora actual: <b>${req.currentTimeText}</b></p>

    ${mensaje ? `<p style="color:red;"><b>${mensaje}</b></p>` : ""}

    <a href="/endroute">
      <button>Ir a endroute</button>
    </a>
  `);
});

module.exports = router;