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

    public static rysuj(center_x,center_y,promień): void {
        console.log("funkcja kolo ");
        ctx.beginPath();
        ctx.arc(center_x, center_y, promień, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }


    public static rysujmale(center_x,center_y,radius): void {
        console.log("funkcja kolo ");
        ctx.beginPath();
        ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "pink";
        ctx.stroke();
    }



}


