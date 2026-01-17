function horaMiddleware(req, res, next) {
  const now = new Date();

  req.currentHour = now.getHours(); // 0 a 23
  req.currentTimeText = now.toLocaleTimeString(); // ej: 13:05:10

  next();
}

module.exports = horaMiddleware;
