








class Punkty {

    // POLA KLASY
    angle: number;
    distance: number;
    label: String;

    // KONSTRUKTOR
    constructor(a: number, b: number, c: String) {
        this.angle = a;
        this.distance = b;
        this.label = c;
    }

    rysuj(){
        // ctx.beginPath();
        // ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
        // ctx.stroke();



        var x = center_x + radius * Math.cos(-angle*Math.PI/180) * distance;
        var y = center_y + radius * Math.sin(-angle*Math.PI/180) * distance;

        ctx.beginPath();
        ctx.arc(x, y, point_size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.font = font_size;
        ctx.fillText(this.label,x + 10,y);

    }
}









//
// function drawPoint(angle,distance,label){
//
// }
//
//
