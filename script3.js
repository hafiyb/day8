// document.getElementById('btn-play').addEventListener('mousedown', vidPlay)

var Video1 = document.getElementById('vid1');
var vol = 1;

var isPlaying = true

function vidPlay(){
    Video1.play()
    isPlaying = true
    document.getElementById('btn-pp').innerHTML = '<i class="fas fa-pause"></i>'
}

function vidPause(){
    Video1.pause()
    isPlaying = false
    document.getElementById('btn-pp').innerHTML = '<i class="fas fa-play"></i>'
}

function vidPlayPause(){
    if(isPlaying == false){
        Video1.play()
        isPlaying = true
        document.getElementById('btn-pp').innerHTML = '<i class="fas fa-pause"></i>'
    } else {
        Video1.pause()
        isPlaying = false
        document.getElementById('btn-pp').innerHTML = '<i class="fas fa-play"></i>'

    }
    
}

function minVol(){

    vol -= 0.1;
    if(vol < 0){
        vol = 0;
    }
    Video1.volume = vol;

}


function switchVid(fileName){
    Video1.src = fileName
}


function maxVol(){

    vol += 0.1;
    if(vol > 1){
        vol = 1;
    }
    Video1.volume = vol;
}

function volCtrl(arg){
    if(arg == 0){
        vol -= 0.1;
        if(vol < 0){
            vol = 0;
        }
    } else {
        vol += 0.1;
        if(vol > 1){
            vol = 1;
        }
    }
    
    Video1.volume = vol;
}