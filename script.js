var songsArray = [
    {songName: "Woh pagal si", url: "./song/2.woh pagal si drama --❤️ d.mp3",Image:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "3:56"},
    {songName: "Zroorat", url: "./song/Cartoon - On _ On (feat. Daniel Levi) [NCS Release](MP3_160K).mp3",Image:"https://images.unsplash.com/photo-1611316185995-9624c94487d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "2:16"},
    {songName: "Jb sy tum", url: "./song/Fareoh - Under Water [NCS Release](MP3_160K).mp3",Image:"https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "4:27"},
    {songName: "Tum zrurat ho meri", url: "./song/Sub Urban - Cradles [NCS Release](MP3_160K).mp3",Image:"https://plus.unsplash.com/premium_photo-1673529434513-36961d98dd23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "3:27"},
    {songName: "Woh pagal si", url: "./song/2.woh pagal si drama --❤️ d.mp3",Image:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "3:56"},
    {songName: "Zroorat", url: "./song/Cartoon - On _ On (feat. Daniel Levi) [NCS Release](MP3_160K).mp3",Image:"https://images.unsplash.com/photo-1611316185995-9624c94487d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "2:16"},
    {songName: "Jb sy tum", url: "./song/Fareoh - Under Water [NCS Release](MP3_160K).mp3",Image:"https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "4:27"},
    {songName: "Tum zrurat ho meri", url: "./song/Sub Urban - Cradles [NCS Release](MP3_160K).mp3",Image:"https://plus.unsplash.com/premium_photo-1673529434513-36961d98dd23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: "3:27"}
]
var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector(".left");
var play = document.querySelector('#play');
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');


var audio = new Audio();
var selectedSong = 0;

function showSongs(){
var clutter = "";
songsArray.forEach(function(song,index){
    clutter += ` <div class="song-card" id="${index}">
    <div class="part-1">
      <img
        src="${song.Image}"
        alt=""
      />
      <h2>${song.songName}</h2>
    </div>
    <h6>${song.duration}</h6>
  </div>`
})
allSongs.innerHTML = clutter;
audio.src = songsArray[selectedSong].url;
poster.style.backgroundImage = `url(${songsArray[selectedSong].Image})`

}
showSongs();


   


allSongs.addEventListener('click',function(details){
     selectedSong = details.target.id;
    showSongs();
    audio.play();
    play.innerHTML = `<i class='bx bx-pause'></i>`;
    flag = 1;
    
    
})


var flag = 0;
play.addEventListener('click',function(){
    if(flag == 0 ){
        play.innerHTML = `<i class='bx bx-pause'></i>`;
        showSongs();
        audio.play();
        flag  = 1;
    }else{
        play.innerHTML = `<i class="bx bx-play"></i>`;
        showSongs();
        audio.pause();
        flag = 0;
    }
})

next.addEventListener("click", function(){
    previous.style.opacity = 1;
    if(selectedSong < songsArray.length -1){
        selectedSong++;
        showSongs();
    }else{
         next.style.opacity = 0.4;
    }
})
previous.addEventListener("click", function(){
    next.style.opacity = 1;
    if(selectedSong >0){
        selectedSong--;
        showSongs();
    }else{
         previous.style.opacity = 0.4;
    }
})