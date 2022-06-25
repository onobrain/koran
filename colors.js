class colors{
    constructor(){

        this.color1 = document.querySelector(".first")
        this.color1.addEventListener("click",()=>{
            this.selectColor("color1")
        })

        this.color2 = document.querySelector(".second")
        this.color2.addEventListener("click",()=>{
            this.selectColor("color2")
        })

        this.color3 = document.querySelector(".third")
        this.color3.addEventListener("click",()=>{
            this.selectColor("color3")
        })

        this.color4 = document.querySelector(".fourth")
        this.color4.addEventListener("click",()=>{
            this.selectColor("color4")
        })

    }

    selectColor(color){
        this.appContainer = document.querySelector("#container");
        this.header = document.querySelector(".show")
        this.buttonPev = document.querySelector("#back")
        this.buttonPlayStop = document.querySelector("#Play_Pause")
        this.buttonNext = document.querySelector("#next")
        this.volume = document.querySelector("#volume")
        this.speed = document.querySelector("#speed")

        if(color ==  "color1"){
            this.appContainer.style.background =  "rgba(38, 50, 56, 1)"
            this.header.style.background =        "rgba(38, 50, 56, 1)"
            this.buttonPev.style.background =     "rgba(38, 50, 56, 1)"
            this.buttonPlayStop.style.background ="rgba(38, 50, 56, 1)"
            this.buttonNext.style.background =    "rgba(38, 50, 56, 1)"
            this.volume.style.background =        "rgba(38, 50, 56, 1)"
        }else if(color == "color2"){
            this.appContainer.style.background =  "rgb(43 66 64)"
            this.header.style.background =        "rgb(43 66 64)"
            this.buttonPev.style.background =     "rgb(43 66 64)"
            this.buttonPlayStop.style.background ="rgb(43 66 64)"
            this.buttonNext.style.background =    "rgb(43 66 64)"
            this.volume.style.background =        "rgb(43 66 64)"

        }else if(color == "color3"){
            this.appContainer.style.background =  "rgb(78 32 4)"
            this.header.style.background =        "rgb(78 32 4)"
            this.buttonPev.style.background =     "rgb(78 32 4)"
            this.buttonPlayStop.style.background ="rgb(78 32 4)"
            this.buttonNext.style.background =    "rgb(78 32 4)"
            this.volume.style.background =        "rgb(78 32 4)"

        }else if(color == "color4"){
            this.appContainer.style.background =  "rgba(169, 108, 16, 1)"
            this.header.style.background =        "rgba(169, 108, 16, 1)"
            this.buttonPev.style.background =     "rgba(169, 108, 16, 1)"
            this.buttonPlayStop.style.background ="rgba(169, 108, 16, 1)"
            this.buttonNext.style.background =    "rgba(169, 108, 16, 1)"
            this.volume.style.background =        "rgba(169, 108, 16, 1)"

        }
    }
}
onload = new colors()