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

    public static rysuj(center_x, center_y, promien, kolor): void {
        console.log("Kolo.rysuj ");
        ctx.beginPath();
        ctx.arc(center_x, center_y, promien, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = kolor;
        ctx.stroke();
    }




}


