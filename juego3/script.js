var color1 = "orange";
var color2 = "silver";
var jugador = 1;
var fichasJ1 = 0;
var fichasJ2 = 0;
var idCeldas;
var bgcCeldas;
var muestraMensaje;
var ganador;
var contadorMensaje;

window.onload = function ()
{
    var selector;
    var i;
    selector = document.getElementById("contenedorTabla");
    selector.onmouseover = mueveDiv;
    selector = document.getElementById("botonColorAzar");
    selector.onclick = colorAzar;
    selector = document.getElementById("botonIntercambiarColores");
    selector.onclick = intercambiarColores;
    selector = document.getElementById("botonColor1");
    selector.onclick = color1Jugador;
    selector = document.getElementById("botonColor2");
    selector.onclick = color2Jugador;
    selector = document.getElementById("botonEmpezar");
    selector.onclick = empezarJuego;
    selector = document.getElementById("botonFinalizar");
    selector.onclick = finalizarJuego;
    selector = document.getElementsByTagName("td");
    idCeldas = new Array (selector.length)
    for (i=0;i<selector.length;++i) {
        idCeldas[i] = selector[i].id; 
    }
    bgcCeldas = new Array(3);
    for (i=0;i<3;i++)
    {
        bgcCeldas[i]= new Array(3);
    }
    muestraMensaje = document.getElementById("texto").innerHTML;
    
}
function mueveDiv()
{
    var aleatorio;
    this.style.left = (parseInt(Math.random()*50)+25)+"%";
    this.style.top = (parseInt(Math.random()*60))+"%";
}
function colorAzar()//aleatoriamente cambia los 2 colores de los jugadores
{
    var selector;
    var contenedor;
    var aleatorio;
    selector = document.getElementById("selectorColor");
    aleatorio = parseInt(Math.random()*13);
    color1 = selector[aleatorio].value;
    color1 = color1.toLowerCase(color1);
    aleatorio = parseInt(Math.random()*13);
    color2 = selector[aleatorio].value;
    color2 = color2.toLowerCase(color2);
    if (color1==color2)
    {
        colorAzar();
    }
    else
    {
        contenedor = document.getElementById("colorelegido1");
        contenedor.style.backgroundColor=color1;
        contenedor = document.getElementById("colorelegido2");
        contenedor.style.backgroundColor=color2;        
    }
}
function intercambiarColores()//intercambia el color del jugador 1 con el color del jugador 2 
{
    var auxiliar;
    auxiliar = color1;
    color1 = color2;
    color2 = auxiliar;
    contenedor = document.getElementById("colorelegido1");
    contenedor.style.backgroundColor=color1;
    contenedor = document.getElementById("colorelegido2");
    contenedor.style.backgroundColor=color2; 
}
function color1Jugador()//funcion para cambiar el color del 1º jugador
{
    var contenedor;
    var selector;
    selector = document.getElementById("selectorColor");
    color1 = selector.value;
    color1 = color1.toLowerCase(color1);
    contenedor = document.getElementById("colorelegido1");
    contenedor.style.backgroundColor=color1;
}
function color2Jugador()//funcion para cambiar el color del 2º jugador
{
    var contenedor;
    var selector;
    selector = document.getElementById("selectorColor");
    color2 = selector.value;
    color2 = color2.toLowerCase(color2);
    contenedor = document.getElementById("colorelegido2");
    contenedor.style.backgroundColor=color2;
}
function partidaEmpezada()
{
    alert("no puedes cambiar el color ya que la partida ha comenzado")
}
function empezarJuego()//funcion para poner todas las variables iniciales y activar funciones para empezar la partida
{
    if (color1==color2)
    {
        alert("los dos jugadores no pueden tener el mismo color");
        return;
    }
    var selector;
    var i;
    var j;
    var celdas;
    selector = document.getElementById("contenedorTabla");
    selector.onmouseover = "";
    selector.style.left = "35%";
    selector.style.top = "0%";
    selector = document.getElementById("botonColorAzar");
    selector.onclick = partidaEmpezada;
    selector = document.getElementById("botonIntercambiarColores");
    selector.onclick = partidaEmpezada;
    selector = document.getElementById("botonColor1");
    selector.onclick = partidaEmpezada;
    selector = document.getElementById("botonColor2");
    selector.onclick = partidaEmpezada;
    celdas = document.getElementsByTagName("td"); //me faltaba esta linea
    for (i=0;i<celdas.length;++i)
    {
        celdas[i].style.backgroundColor="white";
        celdas[i].onclick=cambiaColor;
    }
    for (i=0;i<bgcCeldas.length;++i)
    {
        for (j=0;j<bgcCeldas[i].length;++j)
        {
            bgcCeldas[i][j]="white";
        }
    }
    jugador = 1;
    fichasJ1 = 0;
    fichasJ2 = 0;
    ganador = false;
    document.getElementById("texto").innerHTML="Empieza el jugador 1";
}
function finalizarJuego()//funcion para desactivar las funciones del juego y activar las de eleccion de color para acabar la partida
{
    var selector;
    var i;
    var celdas;    
    selector = document.getElementById("contenedorTabla");
    selector.onmouseover = mueveDiv;
    selector = document.getElementById("botonColorAzar");
    selector.onclick = colorAzar;
    selector = document.getElementById("botonIntercambiarColores");
    selector.onclick = intercambiarColores;
    selector = document.getElementById("botonColor1");
    selector.onclick = color1Jugador;
    selector = document.getElementById("botonColor2");
    selector.onclick = color2Jugador;
    celdas = document.getElementsByTagName("td");
    for (i=0;i<celdas.length;++i)
    {
        celdas[i].onclick="";
    }
}
//------------------------------------------
//---------------3 en raya------------------
//------------------------------------------
function cambiaColor()//funcion principal que cambia el color y la principal del juego que llama a diferente funciones para que todo funcione
{
    var color;
    color = this.style.backgroundColor;
    if (jugador==1 && fichasJ1==3)
    {
        if (color==color1)
        {
            this.style.backgroundColor = "white";
            cambiaComprobador(this);
            fichasJ1--
        }
    }
    else if (jugador==2 && fichasJ2==3)
    {
        if (color==color2)
        {
            this.style.backgroundColor = "white";
            cambiaComprobador(this);
            fichasJ2--
        }
    }
    else if (jugador==1 && color=="white") 
    {
        this.style.backgroundColor=color1;
        jugador=2;
        fichasJ1++;
        cambiaComprobador(this);
        ganador = comprobarGanador(this);
        contadorMensaje = 0;
    }
    else if (jugador==2 && color=="white")
    {
        this.style.backgroundColor=color2;
        jugador=1;
        fichasJ2++
        cambiaComprobador(this);
        ganador = comprobarGanador(this);
        contadorMensaje = 0;
    }
    cambiaMensaje(this);
}
function cambiaComprobador(casilla)//funcion para cambiar la matriz creada para comprobar el 3 en raya
{
    var i;
    var j;
    var x;
    x = 0;
    for (i=0;i<bgcCeldas.length;++i)
    {
        for (j=0;j<bgcCeldas[i].length;++j)
        {
            if (casilla.id==idCeldas[x])
            {
                bgcCeldas[i][j] = casilla.style.backgroundColor;
                return;
            }
            ++x
        }
    }
}
function comprobarGanador(casilla)//comprueba en la matriz todas las opciones posibles por si hubiese un ganador
{
    var color;
    var i;
    color = casilla.style.backgroundColor;
    for (i=0;i<3;++i)
    {
        if (bgcCeldas[i][0]==color && bgcCeldas[i][1]==color && bgcCeldas[i][2]==color)
        {
            return true;
        }
        if (bgcCeldas[0][i]==color && bgcCeldas[1][i]==color && bgcCeldas[2][i]==color)
        {
            return true;
        }
    }
    if (bgcCeldas[0][0]==color && bgcCeldas[1][1]==color && bgcCeldas[2][2]==color)
    {
        return true;
    }
    if (bgcCeldas[0][2]==color && bgcCeldas[1][1]==color && bgcCeldas[2][0]==color)
    {
        return true;
    }
}

function cambiaMensaje(casilla)//escribe el mensaje para saver que a de hacer el jugador al que le toque
{
    var color;
    color = casilla.style.backgroundColor;
    if (ganador)
    {
        if (jugador!=1)
        {
            document.getElementById("texto").innerHTML = "Ha ganado el jugador 1";
            finalizarJuego();
        }
        else
        {
            document.getElementById("texto").innerHTML = "Ha ganado el jugador 2";
            finalizarJuego();
        }
    }
    else if (jugador==1 && fichasJ1==3)
    {
        document.getElementById("texto").innerHTML = "Has de borrar una ficha de tu color, jugador 1";
    }
    else if (jugador==2 && fichasJ2==3)
    {
        document.getElementById("texto").innerHTML = "has de borrar una ficha de tu color, jugador 2";
    }
    else if (jugador==1)
    {
        if (contadorMensaje<1)
        {
            document.getElementById("texto").innerHTML = "le toca al jugador 1";
            contadorMensaje++
        }
        else
        {
            document.getElementById("texto").innerHTML = "solo puedes poner ficha en una celda blanca";
        }
    }
    else if (jugador==2)
    {
        if (contadorMensaje<1)
        {
            document.getElementById("texto").innerHTML = "le toca al jugador 2";
            contadorMensaje++
        }
        else
        {
            document.getElementById("texto").innerHTML = "solo puedes poner ficha en una celda blanca";
        }
    }
}
