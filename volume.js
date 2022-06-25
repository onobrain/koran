class Volume{
    constructor(){
        this.audio_file = document.getElementById("player");

        var volume = document.getElementById("volume")
        this.audio_file.volume = 50/100;
        volume.vlaue = 1;
        volume.addEventListener("input",()=>{
            this.audio_file.volume = volume.value/100;
        })
    }
}
onload = new Volume();