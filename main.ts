//Define Variables
let radius = 290;
let point_size = 4;
let center_x = 400;
let center_y = 300;
let font_size = "20px";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");



Kolo.rysuj(100, 100, 50);

okreg01 = new Okreg(400, 300, radius);
okreg01.rysuj();

// punkty01 = new Punkty();
// punkty01.rysuj();


let mapx = new Map();



let mapy = new Map();



let a;


function pentlaglowna() {

    ctx.clearRect(0, 0, 800, 600);

    Kolo.rysuj(100, 100, 50);

    Kolo.rysujmale(200,200,20);

    okreg01.rysuj();

    a = parseInt((<HTMLInputElement>document.getElementById("okienkoa")).value);
    // a = document.getElementById("okienkoa").value;

    for (let i = 1; i < (a + 1); i++) {
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

    for (let i = 1; i < (a + 1); i++) {
        // ctx.lineTo(mapx.get(i), mapy.get(i));
        for (let k = i; k < (a + 1); k++) {
            console.log("aaaaaaaaaaaaaaaaa");
            ctx.moveTo(mapx.get(i), mapy.get(i));
            ctx.lineTo(mapx.get(k), mapy.get(k));
            ctx.moveTo(mapx.get(i), mapy.get(i));
        }
    }
    //   ctx.lineTo(mapx.get(1), mapy.get(1));
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();
}


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
