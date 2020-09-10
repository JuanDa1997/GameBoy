const playBtn = document.querySelector(".Butom-containers .buttons .A .buttom-A");
const pauseBtn = document.querySelector(".Butom-containers .buttons .B .buttom-B");
const arrowRigth = document.querySelector(".Butom-containers .arows .left-right .Arrow-Rigth");
const arrowLeft = document.querySelector(".Butom-containers .arows .left-right .Arrow-Left");
   


const controls = {
    play: playBtn,
    pause: pauseBtn,
    arrowRigth,
    arrowLeft
}


let contador = 0;

let i = 0;

let epa = () =>{
    document.getElementsByClassName(".Arrow-Right").innerHtml= ++contador
    console.log(`${contador} sumado`)
    if (contador == 1){
        const x = document.getElementsByClassName("Screem")[0];
        x.style.backgroundImage = "url(./covers/imagen2.jpg)";

        let y = document.getElementById("titulo").innerText = "Bob marley";
        
        player = new AudioPlayer(songs[1].url,document.querySelector(".Screem"), controls);
        
    }else if(contador == 2){
        let y = document.getElementById("titulo").innerText = "Michael jackson";

        const x = document.getElementsByClassName("Screem")[0];
        x.style.backgroundImage = "url(./covers/imagen3.jpg)";
        player = new AudioPlayer(songs[2].url,document.querySelector(".Screem"), controls);
        
    }
}

let contador2 = 0;
let epa2 = () =>{
    document.getElementsByClassName(".Arrow-Left").innerHtml= --contador
    console.log(`${contador} restado`)
    if (contador == 0){
        player = new AudioPlayer(songs[0].url,document.querySelector(".Screem"), controls);
        const x = document.getElementsByClassName("Screem")[0];
        x.style.backgroundImage = "";
        let y = document.getElementById("titulo").innerText = "The ascensio";

        
    }else if(contador == 1){
        const x = document.getElementsByClassName("Screem")[0];
        let y = document.getElementById("titulo").innerText = "Bob marley";
        x.style.backgroundImage = "url(../covers/imagen2.jpg)";
        player = new AudioPlayer(songs[1].url,document.querySelector(".Screem"), controls);
        
    }
}

let player = new AudioPlayer(songs[i].url,document.querySelector(".Screem"), controls);


