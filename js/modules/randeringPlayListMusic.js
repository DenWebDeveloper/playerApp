import dataSongs from "./database/dataSongs.js";

// console.log(dataSongs);

let randerAudio = function randeringPlayList(){
    
    // let audioSong = new Audio();


    let audioSong = document.querySelector('.wrap__img__current__song .audio');

    // console.log(audioSong);


    let playList = document.querySelector('.play__list .wrapper__items');

    let allTime = document.querySelector('.wrapper__time__of__music .total__minuts__seconds');

    const counterCurrent = document.querySelector('.counter__songs__playing .counter__current');

    const arrowLeftPath = document.querySelectorAll(".arrow__leftt path");


    counterCurrent.innerText = "01";

    for(let i=0; i < dataSongs.length; i++){

        let item = `<div class="item flex ai-center" id="${dataSongs[i].id}">

                        <div class="number__trecks">${dataSongs[i].numTreck}</div>
                        <div class="title__trecks">${dataSongs[i].titleSong}</div>


                     </div>`;

        playList.insertAdjacentHTML("beforeend", item);

    }

    let arrayItems = document.querySelectorAll(".wrapper__items .item");

    arrayItems[arrayItems.length-1].classList.add("ended");

    let firstItemNum = document.querySelector('.item .number__trecks');

    let firstItemTitle =  document.querySelector('.item .title__trecks');

    firstItemNum.classList.add("active");

    firstItemTitle.classList.add("active");

    let totalNumSong = document.querySelector('.counter__songs__playing .counter__total');

    let subTitleNamePlaing = document.querySelector('.subtitle__name__playing');


    const arrowLefttPath = document.querySelectorAll('.arrow__leftt path');


    totalNumSong.innerText = dataSongs.length;

    audioSong.src = dataSongs[0].song;

    audioSong.id = dataSongs[0].id;

    subTitleNamePlaing.innerText = dataSongs[0].titleSong;

    // alltTime.innerText = dataSongs[0].totalTime;

    function disactiveArrowLeftPath(){

        arrowLeftPath.forEach((elem)=> {
      
          elem.style.stroke = "rgb(43, 43, 43)";
        
        });
      
    }
      
    disactiveArrowLeftPath();

  
};


export default randerAudio;

