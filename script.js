console.log("Welcome to Spotify");
//Initialise the variables
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let audioElement = new Audio('songs/1.mp3');
let songItem = Array.from(document.getElementsByClassName('songItem'));
console.log(songItem)
let songs = [
    {songName:'Salam-e-Ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:'Mohe Rang Do Laal',filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName:'Teri Galiyaan',filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName:'Mein Pareshaan',filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName:'Aaankh Maare',filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName:'Malang',filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName:'Unch hai Building lift teri band hai',filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
    {songName:'Shiv Tandav Strotram',filePath:'songs/8.mp3',coverPath:'covers/8.jpg'},
    {songName:'Ghoomar',filePath:'songs/9.mp3',coverPath:'covers/9.jpg'},
    {songName:'Suraj Hua Madham',filePath:'songs/10.mp3',coverPath:'covers/10.jpg'}
]
songItem.forEach((element,i) => {
    document.getElementsByTagName('img')[i].src = songs[i].coverPath;
    document.getElementsByClassName('songName')[i].innerHTML = songs[i].songName;
});
//audioElement.play();
//Handle pause/play click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        console.log('Timeupdate');
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//lsten to events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value = progress;
    console.log("checking");
    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
    songIndex = parseInt(e.target.id);
    makeAllPlays();
    masterSongName.innerHTML = songs[songIndex].songName;
    console.log(e.target);
    index = parseInt(e.target.id);
    console.log(index)
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = 'songs/'+index+'.mp3';
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
      songIndex = 0;
    }
    else
    {
        songIndex+=1;
    }
    songIndex+=1;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.src = 'songs/'+songIndex+'.mp3';
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>9)
    {
      songIndex = 0;
    }
    else
    {
        songIndex-=1;
    }
    songIndex+=1;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.src = 'songs/'+songIndex+'.mp3';
    console.log(audioElement.src);
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
})