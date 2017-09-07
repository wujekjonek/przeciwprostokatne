class Punkty {

    // POLA KLASY
    angle: number;
    distance: number;
    label: string;

    // KONSTRUKTOR
    constructor(a: number, b: number, c: string) {
        this.angle = a;
        this.distance = b;
        this.label = c;
    }

    rysuj() {

        console.log("klasa Punkty.rysuj");

        var x = center_x + radius * Math.cos(-this.angle * Math.PI / 180) * this.distance;
        var y = center_y + radius * Math.sin(-this.angle * Math.PI / 180) * this.distance;
        ctx.beginPath();

        ctx.arc(x, y, point_size, 0, 2 * Math.PI);

        mapx.set(this.label, x);
        mapy.set(this.label, y);

        ctx.fill();
        ctx.font = font_size;
        ctx.fillText(this.label, x + 10, y);

        //   console.log("x: " + x + "; y:" + y);
        ctx.beginPath();


    }
}


