
const video = document.getElementById('video');

const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");

let stream;


function startCamera(){
  navigator.mediaDevices.getUserMedia({video:true, audio:true})
    .then(mediaStream =>{
      stream = mediaStream;
      video.srcObject = stream;
      video.play();
      
      btnStop.disabled = false;
      btnStart.disabled = true;
    })
    .catch(err => {
      console.log("Camera access denied, try again ", err);
    })
}

function stopCamera(){
  if(stream){
    stream.getTracks().forEach(track =>{
      track.stop();
    });
    video.srcObject = null;
    btnStart.disabled = false;
    btnStop.disabled = true;
    }
}


btnStart.addEventListener('click', startCamera);
btnStop.addEventListener('click', stopCamera);
