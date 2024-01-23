import dataVideos from "./database/dataVideos.js";



let randerVideo = function randeringPlayList(){

    let playList = document.querySelector('.play__list .wrapper__items');

    playList.classList.add('item');
    playList.classList.add('grid__video');

    // const counterCurrent = document.querySelector('.counter__current');

    // counterCurrent.innerText = "01";

    for(let i=0; i < dataVideos.length; i++){

        let item = `<div class="item__video">
                        <img class="img__video" src="${dataVideos[i].imgSrc}"></img>
                        <p class="subtitle__img__video">${dataVideos[i].titleVideo}</p>
                    </div>`;

        playList.insertAdjacentHTML("beforeend", item);

    }


    // let firstItemNum = document.querySelector('.item .number__trecks');

    // let firstItemTitle =  document.querySelector('.item .title__trecks');

    // let firstItem =  document.querySelector('.item ');


    // firstItemNum.classList.add("active");

    // firstItemTitle.classList.add("active");

    // let totalNumSong = document.querySelector('.counter__songs__playing .counter__total');

    // totalNumSong.innerText = dataVideo.length -1;



};


export default randerVideo;