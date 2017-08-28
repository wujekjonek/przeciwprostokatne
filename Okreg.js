var Okreg = (function () {
    // KONSTRUKTOR
    function Okreg(a, b, c) {
        this.center_x = a;
        this.center_y = b;
        this.radius = c;
    }
    Okreg.prototype.rysuj = function () {
        ctx.beginPath();
        ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Okreg;
}());
