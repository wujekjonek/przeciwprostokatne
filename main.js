//Define Variables
var radius = 290;
var point_size = 4;
var center_x = 400;
var center_y = 300;
var font_size = "20px";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
okreg01 = new Okreg(400, 300, radius);
okreg01.rysuj();
// punkty01 = new Punkty();
// punkty01.rysuj();
var mapx = new Map();
// mapx.set("1", 123);
// mapx.set("2", 123);
var mapy = new Map();
// mapy.set("1", 212412);
// mapy.set("2", 4353453);
var a;
function pentlaglowna() {
    ctx.clearRect(0, 0, 800, 600);
    okreg01.rysuj();
    a = parseInt(document.getElementById("okienkoa").value);
    // a = document.getElementById("okienkoa").value;
    for (var i = 1; i < (a + 1); i++) {
        //   console.log("i= " + i + "; a =" + a);
        drawPoint(((360 / a) * i), 1, i);
        // console.log("x= " +mapx.get(i)); // value1
        // console.log("y= " +mapy.get(i)); // value1
    }
    console.log("qqqqqqqqqqqqqqqqqqqqqq");
    przeciwprostokatne();
}
console.log(mapx.get("1")); // value1
console.log(mapy.get("1")); // value1
function przeciwprostokatne() {
    ctx.moveTo(mapx.get(1), mapy.get(1));
    // for (let i = 1; i < (a + 1); i++) {
    //     ctx.lineTo(mapx.get(i), mapy.get(i));
    for (var k = i; k < (a + 1); k++) {
        // console.log("aaaaaaaaaaaaaaaaa");
        // ctx.moveTo(mapx.get(i), mapy.get(i));
        // ctx.lineTo(mapx.get(i+2), mapy.get(i+2));
    }
}
ctx.lineTo(mapx.get(1), mapy.get(1));
ctx.stroke();
function drawPoint(angle, distance, label) {
    var x = center_x + radius * Math.cos(-angle * Math.PI / 180) * distance;
    var y = center_y + radius * Math.sin(-angle * Math.PI / 180) * distance;
    ctx.beginPath();
    ctx.arc(x, y, point_size, 0, 2 * Math.PI);
    mapx.set(label, x);
    mapy.set(label, y);
    ctx.fill();
    ctx.font = font_size;
    ctx.fillText(label, x + 10, y);
    //   console.log("x: " + x + "; y:" + y);
    ctx.beginPath();
    // ** to rysuje kreski ze środka **
    // ctx.moveTo(400, 300);
    // ctx.lineTo(x, y);
    // ctx.stroke();
}
function glowna() {
}
