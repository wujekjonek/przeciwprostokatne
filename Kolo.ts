// class Kolo  {
//     public static rysuj(center_x,center_y,radius): void {
//         console.log("funkcja kolo ");
//         ctx.beginPath();
//         ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
//         ctx.closePath();
//         ctx.strokeStyle = "blue";
//         ctx.stroke();
//     }
// }
//
//

class Kolo {

    public static rysuj(center_x,center_y,promien): void {
        console.log("Kolo.rysuj ");
        ctx.beginPath();
        ctx.arc(center_x, center_y, promien, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#0043aa";
        ctx.stroke();
    }


    public static rysujmale(center_x,center_y,radius): void {
        console.log("Kolo.rysujmale ");
        ctx.beginPath();
        ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#a730aa";
        ctx.stroke();
    }



}


