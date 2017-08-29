

class Okreg {

    // POLA KLASY
    a: number;
    b: number;
    c: number;

    // KONSTRUKTOR
    constructor(srodek_szerokosci: number, srodek_wysokosci: number, promien: number) {
        this.a = srodek_szerokosci;
        this.b = srodek_wysokosci;
        this.c = promien;
    }

    rysuj(){
        ctx.beginPath();
        ctx.arc(this.a, this.b, this.c, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "green";
        ctx.stroke();



    }
}