function poligono(x0, y0, r, n) {
  let x, y, xant, yant, angulo
  xant = r
  yant = 0
  let ln1 = 360 / n
  angulo = ln1
  while (angulo <= 360) {
    x = Math.round( r * Math.cos(angulo * Math.PI / 180))
    y = Math.round (r * Math.sin(angulo * Math.PI / 180))
    lineaBrean(x0 + xant, y0 + yant, x0 +x, y0 + y)
    xant = x
    yant = y
    angulo = angulo + ln1
  }
}
