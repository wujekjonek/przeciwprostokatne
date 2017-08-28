

class Okreg {

    // POLA KLASY
    center_x: number;
    center_y: number;
    radius: number;

    // KONSTRUKTOR
    constructor(a: number, b: number, c: number) {
        this.center_x = a;
        this.center_y = b;
        this.radius = c;
    }

    rysuj(){
        ctx.beginPath();
        ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}