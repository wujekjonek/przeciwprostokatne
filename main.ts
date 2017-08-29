//Define Variables
let radius = 290;
let point_size = 4;
let center_x = 400;
let center_y = 300;
let font_size = "20px";

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");




okreg01 = new Okreg(400, 300, radius);
okreg01.rysuj();


let mapx = new Map();

let mapy = new Map();

let a;


function pentlaglowna() {

    ctx.clearRect(0, 0, 800, 600);

    Kolo.rysuj(100, 100, 50);
    Kolo.rysujmale(100, 500, 20);

    okreg01.rysuj();
    a = parseInt((<HTMLInputElement>document.getElementById("okienkoa")).value);

    for (let i = 1; i < (a + 1); i++) {
        punkty01 = new Punkty(((360 / a) * i), 1, i);
        punkty01.rysuj();
    }



// 3)
    PProstokatne.rysuj(mapx, mapy);

// 2)
//     pprostokatne01 = new PProstokatne();
//     pprostokatne01.rysuj(mapx, mapy);


// 1)
// pprostokatne01 = new PProstokatne(mapx, mapy);
// pprostokatne01.rysuj();

}


