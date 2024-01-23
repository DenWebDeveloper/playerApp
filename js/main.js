import dataSongs from "./modules/database/dataSongs.js";
import randerAudio from "./modules/randeringPlayListMusic.js";
import dataVideos from "./modules/database/dataVideos.js";
import randerVideo from "./modules/randeringPlayListVideo.js";

const music = document.querySelector(".item__header__music");
const video = document.querySelector(".item__header__video");
const wrapPlayList = document.querySelector(".play__list");
const burgerBtn = document.querySelector(".burger__menu");
const closeBtn = document.querySelector(".svg__arrow");
const play = document.querySelector(".item__play");
const pause = document.querySelector(".item__pause");
const randomPlayDiz = document.querySelector(".random__play.diz");
const randomPlayActive = document.querySelector(".random__play.active");

const repeatPlay = document.querySelector(".repeat__play");
// const repeatPlayOne = document.querySelector(".repeat__play-one");
const arrowLeft = document.querySelector(".arrow__leftt");
const arrowLeftPath = document.querySelectorAll(".arrow__leftt path");

const arrowRight = document.querySelector(".arrow__rightt");
const arrowRightPath = document.querySelectorAll(".arrow__rightt path");
let arrayItemsSongs = document.querySelectorAll(".wrapper__items .item");

let currentNumSong = document.querySelector(
  ".counter__songs__playing .counter__current"
);
let counterTotal = document.querySelector(".counter__total");

let currenTitleSong = document.querySelector(
  ".wrapper__playing .subtitle__name__playing"
);

let imgCurrentSong = document.querySelector(".wrap__img__current__song");
let audioSong = document.querySelector(".wrap__img__current__song .audio");
let wrapperItems = document.querySelector(".wrapper__items");
let progress = document.querySelector(".progress__bar");
let progressBar = document.querySelector(".progress__bar .before");
let progressBarDot = document.querySelector(".progress__bar .dot");

let currentTime = document.querySelector(
  ".wrapper__time__of__music .current__minuts__seconds"
);
let totalTime = document.querySelector(
  ".wrapper__time__of__music .total__minuts__seconds"
);

randerAudio();
let currentIndex = 0;

findArrayItemsSongs();

dropPause();

qwe();

function activeArrowLeftPath() {
  arrowLeftPath.forEach((elem) => {
    elem.style.stroke = "white";
  });
}

function disactiveArrowLeftPath(){

  arrowLeftPath.forEach((elem)=> {

    elem.style.stroke = "rgb(43, 43, 43)";
  
  });

}

function activeArrowRightPath() {
  arrowRightPath.forEach((elem) => {
    elem.style.stroke = "white";
  });
}

function disableArrowRightPath() {
  arrowRightPath.forEach((elem) => {
    elem.style.stroke = "rgba(160, 159, 159,.3)";
  });
}

function qwe() {
  currenTitleSong.textContent = dataSongs[currentIndex].titleSong;
  currentNumSong.textContent = dataSongs[currentIndex].numTreck;
  counterTotal.textContent = dataSongs.length;
}

function clearListAudio() {
  wrapperItems.innerText = "";
}

function clearListVideo() {
  wrapperItems.innerText = "";
}

function deleteActiveItemSongs() {
  let numTracks = document.querySelectorAll(".number__trecks");

  let titleTracks = document.querySelectorAll(".title__trecks");

  numTracks.forEach((num) => {
    num.classList.remove("active");
  });

  titleTracks.forEach((title) => {
    title.classList.remove("active");
  });
}

function addActiveListItem() {
  let arrayItemsSongs = document.querySelectorAll(".wrapper__items .item");

  arrayItemsSongs[currentIndex].childNodes[1].classList.add("active");
  arrayItemsSongs[currentIndex].childNodes[3].classList.add("active");
}

function findArrayItemsSongs() {
  let arrayItemsSongs = document.querySelectorAll(".wrapper__items .item");

  arrayItemsSongs.forEach((item) => {
    item.addEventListener("click", (e) => {
      activeArrowLeftPath();
      activeArrowRightPath();
      audioSong.classList.add("play");

      arrayItemsSongs.forEach((elem) => {
        elem.classList.remove("active");
      });

      deleteActiveItemSongs();

      e.target.parentNode.classList.add("active");

      if (e.target.classList.contains("item")) {
        e.target.childNodes[1].classList.add("active");
        e.target.childNodes[3].classList.add("active");

        let pup =
          "./songs/Александр Казлитин - " +
          e.target.childNodes[3].innerText +
          ".mp3";

        audioSong.src = pup;

        currentIndex = e.target.id;
      } else {
        e.target.parentNode.childNodes[1].classList.add("active");

        e.target.parentNode.childNodes[3].classList.add("active");

        let pup1 =
          "./songs/Александр Казлитин - " +
          e.target.parentNode.childNodes[3].innerText +
          ".mp3";
        audioSong.src = pup1;

        currentIndex = e.target.parentNode.id;

      }

      currentNumSong.innerText = "";
      currenTitleSong.innerText = "";
      currentNumSong.innerText = item.childNodes[1].innerText;
      currenTitleSong.innerText = item.childNodes[3].innerText;
      audioSong.id = item.id;
      dropPlay();
      addGifToWrapperPlaying();
      currentIndex = item.id;
      audioSong.src = dataSongs[currentIndex].song;
      audioSong.play();
      updateCurrentTime();
      setInterval(updateCurrentTime, 1000);
      setInterval(updateProgressBar, 1000);
      wrapPlayList.classList.remove("active");

    });
  });
}

music.addEventListener("click", () => {
  music.classList.add("active");
  video.classList.remove("active");
  wrapperItems.classList.remove("grid__video");

  clearListVideo();
  randerAudio();
  findArrayItemsSongs();
});

// video.addEventListener("click", () => {
//   music.classList.remove("active");

//   video.classList.add("active");

//   clearListAudio();
//   randerVideo();
//   findArrayItemsSongs();

// });

function paused() {
  if (play.style.display == "block") {
    addJpgToWrapperPlaying();
    audioSong.pause();
  } else {
    return;
  }
}

function dropPause() {
  play.style.display = "block";
  pause.style.display = "none";
}

function dropPlay() {
  play.style.display = "none";
  pause.style.display = "block";
}

function addGifToWrapperPlaying() {
  imgCurrentSong.style.background = "url(../images/musical-notes.gif)";
  imgCurrentSong.style.backgroundPosition = "center center";
  imgCurrentSong.style.backgroundSize = "cover";
  imgCurrentSong.style.backgroundRepeat = "no-repeat";
}

function addJpgToWrapperPlaying() {
  imgCurrentSong.style.background = "url(../images/musical__notes.jpg)";
  imgCurrentSong.style.backgroundPosition = "center center";
  imgCurrentSong.style.backgroundSize = "cover";
  imgCurrentSong.style.backgroundRepeat = "no-repeat";
}

function updateProgressBar() {
  let position;

  position = Math.ceil(audioSong.currentTime * (100 / audioSong.duration));
  progressBar.style.width = position + "%";
  progressBarDot.style.left = position + "%";
}

function updateCurrentTime() {
  setInterval(updateProgressBar, 1);
  let currentMin = Math.floor(audioSong.currentTime / 60);
  let currentSec = Math.floor(audioSong.currentTime - currentMin * 60);
  let durationMin = Math.floor(audioSong.duration / 60);
  let durationSec = Math.floor(audioSong.duration - durationMin * 60);

  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }
  if (durationSec < 10) {
    durationSec = "0" + durationSec;
  }
  if (currentMin < 10) {
    currentMin = "0" + currentMin;
  }
  if (durationMin < 10) {
    durationMin = "0" + durationMin;
  }

  currentTime.textContent = currentMin + ":" + currentSec + " /";

  totalTime.textContent = durationMin + ":" + durationSec;
}
play.addEventListener("click", () => {
  dropPlay(); // Установка иконки пауза
  addGifToWrapperPlaying(); // Установка гифки на фон
  updateCurrentTime(); // Обновление текущего времени
  setInterval(updateCurrentTime, 10);
  audioSong.play();
  audioSong.classList.add("play");
  // nextTrack();
});


function prevTrack() {

  if(currentIndex == 1){
    currentIndex = 0;

    disactiveArrowLeftPath();

    deleteActiveItemSongs();
    addActiveListItem();
    qwe();
    console.log("Отработал");
    
  }
  // Если текущий индекс больше нуля и меньше длины массива Объекта
  if (currentIndex > 1 && currentIndex < dataSongs.length) {
    currentIndex--;
    audioSong.src = dataSongs[currentIndex].song;
    deleteActiveItemSongs();
    addActiveListItem();
    qwe();

    activeArrowLeftPath();
    activeArrowRightPath();

    if (audioSong.classList.contains("play")) {
      audioSong.play();
      dropPlay();
      addGifToWrapperPlaying();
    }
  }

  // Если кнопка Рандом активна
  if (randomPlayActive.style.display === "block") {
    deleteActiveItemSongs();
    randomTreck();
    // audioSong.play();
    // dropPlay();
  }

  // Если кнопка Репит активна
  if (repeatPlay.classList.contains("active")) {
    if (currentIndex <= 0) {
      console.log("CurrentIndex = " + currentIndex);
    }

    audioSong.src = dataSongs[currentIndex].song;
    let arrayItemsSongs = document.querySelectorAll(".wrapper__items .item");
    arrayItemsSongs[currentIndex].childNodes[1].classList.add("active");
    arrayItemsSongs[currentIndex].childNodes[3].classList.add("active");
    console.log(currentIndex);
  }
}

function loopPlayList() {

  currentIndex ++;
  

  if(currentIndex > dataSongs.length -1) {

    currentIndex = 0;
    audioSong.src = dataSongs[currentIndex].song;
    audioSong.id = dataSongs[currentIndex].id;

  }else {


   currentIndex = currentIndex;
   audioSong.src = dataSongs[currentIndex].song;
   audioSong.id = dataSongs[currentIndex].id;

  }

  deleteActiveItemSongs();
  addActiveListItem();
  qwe();
  activeArrowLeftPath();

  audioSong.play();

  console.log("Отработал loopTreck");

 
}

function nextTreck() {

  // Увеличиваем индекс на единицу, перемещаемся по плей листу
  if (currentIndex < dataSongs.length - 1){

    currentIndex++;

    audioSong.src = dataSongs[currentIndex].song;
    audioSong.id = dataSongs[currentIndex].id;
    deleteActiveItemSongs();
    addActiveListItem();
    qwe();
    activeArrowLeftPath();

    // console.log("currentIndex меньше длины массива");


  }

  if (currentIndex == dataSongs.length - 1) {
    
    disableArrowRightPath();

  }

  // Дизэйблим кноgre right
  // Зацикливаем плей лист
  if (currentIndex > dataSongs.length -1) {

    activeArrowLeftPath();
    addJpgToWrapperPlaying();
    dropPause();
    // console.log("currentIndex больше длины массива");

  }

  // Включаем трек
  if (audioSong.classList.contains("play")) {
    audioSong.play();
  }

  // Активирем кнопку Random
  if (randomPlayActive.style.display === "block") {
    deleteActiveItemSongs();
    randomTreck();
    audioSong.play();
    dropPlay();

  }

  console.log("Отработал просто nextTreck");

}

arrowLeft.addEventListener("click", () => {
  arrowLeft.classList.add("active");

  function del() {
    arrowLeft.classList.remove("active");
  }

  setTimeout(del, 100);
  // dropPause();
  // paused();

  prevTrack();
});
arrowRight.addEventListener("click", ()=>{

  if(repeatPlay.classList.contains("active")){
    loopPlayList();
  }else{
    nextTreck();
  }
});

pause.addEventListener("click", () => {
  dropPause();
  addJpgToWrapperPlaying();

  audioSong.pause();
  audioSong.classList.remove("play");
});

function setProgress(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;

  let duration = Math.ceil(audioSong.duration);

  audioSong.currentTime = (clickX / width) * duration;
}

progress.addEventListener("click", setProgress);

closeBtn.addEventListener("click", () => {
  wrapPlayList.classList.remove("active");
});

burgerBtn.addEventListener("click", () => {
  wrapPlayList.classList.toggle("active");
});

repeatPlay.addEventListener("click", () => {

  if (!repeatPlay.classList.contains("active")) {4

    randomPlayActive.style.display = "none";
    randomPlayDiz.style.display = "block";
    audioSong.classList.add("play");
    repeatPlay.classList.add("active");
    activeArrowRightPath();


  } else {

    repeatPlay.classList.remove("active");
  
  }
});

// repeatPlayOne.addEventListener("click", () => {
//   repeatPlayOne.classList.remove("active");
//   repeatPlay.classList.remove("active");
// });

audioSong.addEventListener("ended", () => {

  let valueRepeatActive = repeatPlay.classList[1];

  // console.log(valueRepeatActive);

  switch (valueRepeatActive) {

    case "active":

      loopPlayList();
      activeArrowRightPath();

      break;
  
    default:
      break;
  }

  if(currentIndex < dataSongs.length-1 && !repeatPlay.classList.contains("active")){

    nextTreck();

  }

});

randomPlayDiz.addEventListener("click", () => {

  repeatPlay.classList.remove("active");
  randomPlayDiz.style.display = "none";
  randomPlayActive.style.display = "block";

  deleteActiveItemSongs();
  randomTreck();
  currentIndex = currentIndex;
  audioSong.src = dataSongs[currentIndex].song;

  dropPause();
  activeArrowRightPath();
});

randomPlayActive.addEventListener("click", () => {

  randomPlayActive.style.display = "none";
  randomPlayDiz.style.display = "block";
  
});

function randomTreck() {
  let arrayItemsSongs = document.querySelectorAll(".wrapper__items .item");
  let randomIndex = Math.ceil(Math.random() * dataSongs.length - 1);

  console.log("Рандомный индекс" + " " + randomIndex);

  activeArrowLeftPath();
  updateCurrentTime();
  setInterval(updateCurrentTime, 10);

  audioSong.id = dataSongs[randomIndex].id;
  audioSong.src = dataSongs[randomIndex].song;

  currentNumSong.textContent = dataSongs[randomIndex].numTreck;
  counterTotal.textContent = dataSongs.length;
  currenTitleSong.textContent = dataSongs[randomIndex].titleSong;

  currentNumSong.innerText = arrayItemsSongs[randomIndex].childNodes[1].innerText;
  currenTitleSong.innerText = arrayItemsSongs[randomIndex].childNodes[3].innerText;

  arrayItemsSongs[randomIndex].classList.add("active");
  arrayItemsSongs[randomIndex].childNodes[1].classList.add("active");
  arrayItemsSongs[randomIndex].childNodes[3].classList.add("active");

  // return randomIndex;

  currentIndex = randomIndex;
}
