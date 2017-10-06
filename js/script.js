var myvids = [];
var valid = [];
var myvid = document.getElementById('myvideo');
var activeVideo = 0;

function play(){
  myvid.addEventListener('ended', addVideos);
}

function addVideos(e){
  if(activeVideo+1 === myvids.length){
    myvid.removeEventListener('ended', addVideos)
  }
  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  // update the new active video index
  activeVideo = (++activeVideo);
}

function maceracion(){
  myvids.push("videos/maceracion.mp4");
  valid.push(1);
}
function hervor(){
  myvids.push("videos/hervor.mp4");
  valid.push(2);
}
function enfriado(){
  myvids.push("videos/enfriado.mp4");
  valid.push(3);
}
function fermentacion(){
  myvids.push("videos/fermentacion.mp4");
  valid.push(4);
}
function maduracion(){
  myvids.push("videos/maduracion.mp4");
  valid.push(5);
}
function embotellamiento(){
  myvids.push("videos/embotellamiento.mp4");
  valid.push(6);
}

function check(){
  for(var i=0;i<6;++i){
    if(valid[i] != i+1){
      myvids.push("videos/wrong.mp4");
      break;
    }
  }
}

