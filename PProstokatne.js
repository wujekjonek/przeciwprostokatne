var PProstokatne = (function () {
    function PProstokatne() {
    }
    PProstokatne.rysuj = function (mapx, mapy) {
        console.log("funkcja przeciwprostokatne ----------");
        ctx.moveTo(mapx.get(1), mapy.get(1));
        for (var i = 1; i < (a + 1); i++) {
            console.log("x= " + mapx.get(i));
            console.log("y= " + mapy.get(i));
            for (var k = i; k < (a + 1); k++) {
                console.log("pentla rysuje przeciwprostokatne");
                ctx.strokeStyle = "#ff4932";
                ctx.moveTo(mapx.get(i), mapy.get(i));
                ctx.lineTo(mapx.get(k), mapy.get(k));
                ctx.moveTo(mapx.get(i), mapy.get(i));
            }
        }
        ctx.stroke();
    };
    return PProstokatne;
}());
// class PProstokatne {
//
//     // POLA KLASY
//     mapx: number;
//     mapy: number;
//
//
//     // KONSTRUKTOR
//     constructor(mapx: number, mapy: number) {
//         this.mapx = mapx;
//         this.mapy = mapy;
//
//     }
//
//     // METODY
//     rysuj() {
//         console.log("Klasa przeciwprostokatne ----------");
//
//         ctx.moveTo(mapx.get(1), mapy.get(1));
//
//         for (let i = 1; i < (a + 1); i++) {
//             console.log("x= " +mapx.get(i));
//             console.log("y= " +mapy.get(i));
//
//             for (let k=i; k < (a+1); k++) {
//                 console.log("pentla rysuje przeciwprostokatne");
// ctx.strokeStyle = "#ff4932";
//                 ctx.moveTo(mapx.get(i), mapy.get(i));
//                 ctx.lineTo(mapx.get(k), mapy.get(k));
//                 ctx.moveTo(mapx.get(i), mapy.get(i));
//             }
//         }
//         ctx.stroke();
//     }
//
//
// }
//
