function devolverCasilla(i, j) {
    return document.getElementById(i + "_" + j);
}
function devolverCasilla1(i, j) {
    return document.getElementById(i + "_" + j+"B");
}
function casillaOnClick(i, j) {
    console.log("Hizo Click en", i, j);

    

    let casilla = devolverCasilla(i, j);
    let idCasilla = i + "_" + j;
    casilla.innerHTML="x"
    let cordenadaX1= i+1
    let cordenadaX2= i-1
    let cordenadaY1=j+1
    let cordenadaY2=j-1
    let casillaOp=devolverCasilla1(7-i,7-j);
    casillaOp.innerHTML="x"
    

    if ((cordenadaX1 <8) && (cordenadaX1>= 0)) {
        let casillaDerecha = devolverCasilla(cordenadaX1, j);
        console.log("Hizo Click en", cordenadaX1, j);
        casillaDerecha.innerHTML="x"
        let casillaOp1=devolverCasilla1(7-cordenadaX1,7-j);
        casillaOp1.innerHTML="x"
    }
    if ((cordenadaX2 <8) && (cordenadaX2 >= 0)) {
        let casillaIzquierda = devolverCasilla(cordenadaX2, j);
        console.log("Hizo Click en", cordenadaX2, j);
        casillaIzquierda.innerHTML="x"
        let casillaOp2=devolverCasilla1(7-cordenadaX2,7-j);
        casillaOp2.innerHTML="x"
    }
    if ((cordenadaY1 <8) && (cordenadaY1>= 0)) {
        let casillaAbajo = devolverCasilla(i, cordenadaY1);
        console.log("Hizo Click en", i, cordenadaY1);
        casillaAbajo.innerHTML="x"
        let casillaOp3=devolverCasilla1(7-i,7-cordenadaY1);
        casillaOp3.innerHTML="x"
    }
    console.log("Hizo Click en", i,cordenadaY2)
    if ((cordenadaY2 <8) && (cordenadaY2>= 0)) {
        let casillaArriba = devolverCasilla(i, cordenadaY2);
        console.log("Hizo Click en", i,cordenadaY2);
        casillaArriba.innerHTML="x"
        let casillaOp4=devolverCasilla1(7-i, 7-cordenadaY2);
        casillaOp4.innerHTML="x"

    }

}




