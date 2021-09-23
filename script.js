var videoPlayer = document.getElementById('player')
var buttonPp = document.getElementById('btn-pp')
var vol = 1, vidNumber = 0;
var volumeBar = document.getElementById('volume-value')
const title = ["Test video of a road in a city","Test video of a couple of buses passing by the park","A stream of vehicles passing by the park",
"Test video of the road, and then of the traffic flow","Videos of the park, roads, and even people crossing a pedestrian crossing"]
const vidNum = ["assets/sample-5s.mp4","assets/sample-10s.mp4","assets/sample-15s.mp4","assets/sample-20s.mp4","assets/sample-30s.mp4"]

function actionPp(){
    if(videoPlayer.paused){
        videoPlayer.play();
        buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-pause"></i>'
    } else{
        videoPlayer.pause();
        buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-play"></i>'
    }
}

function actionVol(value){
    if(videoPlayer.muted){
        videoPlayer.muted = false
    }

    vol += value
    if(vol > 1){
        vol = 1;
    } else if (vol < 0){
        vol = 0;
    }

    videoPlayer.volume = vol

    
    updateVol()
}

function actionMute(){
    if(videoPlayer.muted){
        videoPlayer.muted = false
    } else videoPlayer.muted = true

    updateVol()
}

function updateVol(){
    if(videoPlayer.muted){
        volumeBar.style.backgroundColor = "white"
    } else volumeBar.style.backgroundColor = "red"
    var volVal = vol*100
    volumeBar.style.width = (volVal +'%')
}

function actionNav(arg){
    vidNumber += arg;
    if(vidNumber < 0){
        vidNumber = 4
    } else if (vidNumber > 4){
        vidNumber = 0
    }
    
    changeVid(vidNumber)
}

function changeVid(num){

    console.log("test")
    document.getElementById('vid-title').innerHTML = title[num];
    document.getElementById('player').src = vidNum[num]


    videoPlayer.pause();
    buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-play"></i>'

    vidNumber = num;
}

