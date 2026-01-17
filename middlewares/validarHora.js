function validarHora(req, res, next) {
  const hour = req.currentHour;

  if (hour >= 12) {
    return next();
  }

  const mensaje = "Aún no son las 12 de la mañana";
  return res.redirect("/?mensaje=" + encodeURIComponent(mensaje));
}

module.exports = validarHora;