let canva = document.querySelector('canvas');
let pincel = canva.getContext('2d');


function desenhaRosto(x1,y1,x2,y2){
    pincel.fillStyle = 'green';
    pincel.fillRect(x1,y1,x2,y2);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x1,y1,x2,y2);
}

function desenhaQuadrado(x1,y1,x2,y2){
    pincel.fillStyle = 'black';
    pincel.fillRect(x1,y1,x2,y2);
}

desenhaRosto(0,0,350,300);
desenhaQuadrado(50,60,90,90);
desenhaQuadrado(210,60,90,90);
desenhaQuadrado(140,150,70,100);
desenhaQuadrado(100,190,40,110);
desenhaQuadrado(210,190,40,110);
