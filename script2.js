console.log("javascript");
//Initialise the variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = document.getElementsByClassName('songItem');
let masterSongName = document.getElementsByClassName('masterSongName')[0];
let songs = [
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"You belong with me",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Love Story",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Blank Space",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Sanam Re",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Jashn-e-Bahara",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Teardrops on my guitar",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Aitraaz",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Ghoomar",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Deewani ho gayi",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
];
let audioElement = new Audio('songs/1.mp3');
//Listen to Events
masterPlay.addEventListener("click",()=>{
   if(audioElement.paused||audioElement.currentTime<=0)
   {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
   }
   else
   {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
   }
});
audioElement.addEventListener("timeupdate",()=>{
console.log("TimeUpdate");
//Update Seekbar
progress = parseInt(audioElement.currentTime/audioElement.duration*100);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
Array.from(songItems).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML= songs[i].songName;
})
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPLay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
};
console.log(document.getElementsByClassName('songItemPLay'));
Array.from(document.getElementsByClassName('songItemPLay')).forEach((element)=>{
    console.log(element);
element.addEventListener('click',(e)=>{
songIndex = parseInt(e.target.id);
console.log(e.target);
makeAllPlays();
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
gif.style.opacity = 1;
audioElement.src = `songs/${songIndex+1}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
masterSongName.innerHTML = songs[songIndex].songName;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 7;

    }
    else
    {
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=7)
    {
        songIndex = 0;

    }
    else
    {
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerHTML = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});