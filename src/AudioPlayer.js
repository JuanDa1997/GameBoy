class AudioPlayer{
    constructor(src,domElement, controls){
        this.src = src;
        this.audio = new Audio(this.src);
        this.controls = controls;
        this.domElement = domElement;
        this.songs = songs;
        this.contador = contador;

        this.progress = this.domElement.querySelector(".Screem-container .Screem .progress");
        this.initControls();
        this.audio.ontimeupdate = () => {this.updateUI(); }
    }

    initControls(){
        if (this.controls.play) {
            this.initPlay(this.controls.play);
        }

        if (this.controls.pause) {
            this.initPlay(this.controls.pause);
        }

        // if (this.controls.arrowRigth) {
        //     this.initPlay(this.controls.arrowRigth)
        // }
    }



    initPlay(domElement){
        domElement.onclick = () => {
            const icon = domElement.querySelector("i");
            // console.log(icon);
            const isPaused = icon.classList.contains("buttom-B");
            const isPlay = icon.classList.contains("buttom-A");
            // const isSkip = icon.classList.contains("Arrow-Rigth");
            if(isPlay){
                this.play();              
            }

            if(isPaused){
                this.pause();              
            }

            // if(isSkip){
            //    this.skip();
            // }

           
        }
    }

    updateUI(){
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        this.progress.style.width = `${progress}%`;
    }

    play(){

        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));
    }

    pause(){
        this.audio.pause();
    }

    skip = () =>{
        
        document.getElementsByClassName(".Arrow-Right").innerHtml= ++contador

        

        // const changeImage = document.querySelector(".Screem-Container .Screem");
    //    const x = document.getElementsByClassName("Screem")[0];
    //    x.style.backgroundImage = "url(../covers/a3076805245_2.jpg)";
        // player.play();


       
       
        // document.getElementsByClassName(".Arrow-Right").innerHtml= ++contador
        // const [TheSong_1,TheSong_2,TheSong_3] = songs; //Destructuracion    


        if (contador == 1){
            console.log("cancion 1");
            this.play(songs[0].url);
        }else if(contador == 2){
            console.log("cancion 2");
            this.play(songs[1].url);

        }else if (contador == 3) {
            console.log("cancion 3");
            this.play(songs[0].url);

        }

    }

}
