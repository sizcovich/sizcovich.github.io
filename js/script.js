var myvid = document.getElementById('myvideo');
var myvids = [
  "videos/1.mp4", 
  "videos/2.mp4",
  "videos/3.mp4",
  "videos/4.mp4",
  "videos/5.mp4",
  "videos/6.mp4"
  ];
var activeVideo = 0;
myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});