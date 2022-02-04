const volume = document.getElementById('volume');
const volumec = document.getElementById('volume-container');
const progress = document.getElementById('progress')
const progressc = document.getElementById('progress-container')
const player = document.getElementById('panel')
const playBtn = document.getElementById('play')
const audio = document.getElementById('song')

function setVolume(e) {
   const height = this.clientHeight;
   const newHeight = e.offsetY;
   volume_amount = (newHeight - 100 )* -.01
   volumec.style.height = `${newHeight}%`
   audio.volume = volume_amount
}
function updateProgress(e){
			const duration = audio.duration;
      const currentTime = audio.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;

			/* console.log(progressPercent)
			console.log(duration)
			console.log(currentTime) */

}

function setProgress(e){
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
			console.log(duration);
			console.log(clickX);
			console.log(width);
			console.log(((clickX/width) * duration));
      audio.currentTime = (clickX/width) * duration;
			console.log(audio.currentTime)

}



function playSong() {
  player.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

function pauseSong() {
  player.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
}


playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

progressc.addEventListener("click", setProgress)
volume.addEventListener("click", setVolume);
audio.addEventListener('timeupdate' , updateProgress);
