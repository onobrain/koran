class Player{
    constructor(){
        
        this.audio_file = document.getElementById("player");
        this.isPlayed;

        this.play = document.querySelector("#Play_Pause img");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =["media/moussa.mp3","media/wmln-l-ntwkl-l-llh-wqd-hdn-sbln.mp3","media/swr-lhjr-tlw-hdy-tryh-lnfs-lqry-hz-lblwshy.mp3"];
    
        this.names = [" جزء من سورة غافر ","جزء من سورة إبراهيم","جزء من سورة الحج"];
        
        this.numberAudio =0;

    

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
          this.back_audio();  
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "img/pause-free-icon-font.png";
            this.audio_file.play();
            this.isPlayed=true;
            this.play.style.marginLeft = "0%"
        }
        else{
            this.play.src ="img/playStop.png";
            this.audio_file.pause();
            this.isPlayed=false;
            this.play.style.marginLeft = "5%"
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("musicTitle").innerHTML = this.names[this.numberAudio];
    document.getElementById("player").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();