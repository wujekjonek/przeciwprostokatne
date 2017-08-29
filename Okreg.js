var Okreg = (function () {
    // KONSTRUKTOR
    function Okreg(srodek_szerokosci, srodek_wysokosci, promien) {
        this.a = srodek_szerokosci;
        this.b = srodek_wysokosci;
        this.c = promien;
    }
    Okreg.prototype.rysuj = function () {
        ctx.beginPath();
        ctx.arc(this.a, this.b, this.c, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "green";
        ctx.stroke();
    };
    return Okreg;
}());
