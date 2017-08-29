var PProstokatne = (function () {
    function PProstokatne() {
    }
    // POLA KLASY
    // center_x: number;
    // center_y: number;
    // radius: number;
    // KONSTRUKTOR
    // constructor() {
    // this.center_x = a;
    // this.center_y = b;
    // this.radius = c;
    // }
    // rysuj() {
    PProstokatne.rysuj = function (mapx, mapy) {
        console.log("funkcja przeciwprostokatne");
        ctx.moveTo(mapx.get(1), mapy.get(1));
        for (var i = 1; i < (a + 1); i++) {
            console.log("x= " + mapx.get(i));
            console.log("y= " + mapy.get(i));
            for (var k = i; k < (a + 1); k++) {
                console.log("pentla rysuje przeciwprostokatne");
                ctx.moveTo(mapx.get(i), mapy.get(i));
                ctx.lineTo(mapx.get(k), mapy.get(k));
                ctx.moveTo(mapx.get(i), mapy.get(i));
            }
        }
        ctx.stroke();
    };
    return PProstokatne;
}());
