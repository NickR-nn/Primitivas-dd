function lineaBresenham(x1, y1, x2, y2) {
    var x, y, dx, dy, p, pasox, pasoy, inc1, inc2;
    dx = x2 - x1;
    dy = y2 - y1;
    if (dy < 0) {
        dy = -dy;
        pasoy = -1;
    }
    else {
        pasoy = 1;
    }
    if (dx < 0) {
        dx = -dx;
        pasox = -1;
    }
    else {
        pasox = 1;
    }
    x = x1;
    y = y1;
    if (dx > dy) {
        p = 2 * dy - dx;
        inc1 = 2 * dy;
        inc2 = 2 * (dy - dx);
        while (x != x2) {
            x += pasox;
            if (p < 0) {
                p = p + inc1;
            }
            else {
                y += pasoy;
                p += inc2;
            }
            drawPixel(x, y, 149, 199, 58, 255);
        }
    }
    else {
        p = 2 * dx - dy;
        inc1 = 2 * dx;
        inc2 = 2 * (dx - dy);
        while (y != y2) {
            y += pasoy;
            if (p < 0) {
                p += inc1;
            }
            else {
                x += pasox;
                p += inc2;
            }
            drawPixel(x, y, 149, 199, 58, 255);
        }
    }

}
