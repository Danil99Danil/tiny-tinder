let photoFolder = [
    ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg",],
    ["./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg",], 
    ["./img/тигер.jpg", "./img/щековина.jpg",],
    ];

/*USER FOLDER PHOTO*/
let photo = ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg", "./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg"];
/*USER FOLDER PHOTO*/

/*ARROW SWIPER*/
let arrow = document.querySelector("#interface-nudes > div > div.sviper-photo > button");
/*ARROW SWIPER*/

/*NUMBER SWIPE*/
let lvlCounter = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = 0;
/*NUMBER SWIPE*/

/*LEVEL UP*/
let levelUp = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.level");
/*LEVEL UP*/

/*NEW PHOTO*/
let newPhoto = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new");
/*NEW PHOTO*/

/*MU LEVEL PHOTO*/
let levelPhotoMy = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new > h2").innerHTML = 1;
/*MU LEVEL PHOTO*/

let newBtn = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new");

/*FUNCTION COUNTER SWIPE*/
function countSwipe() {
    // numberSwipe += 1;
    lvlCounter += 1;
    document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = lvlCounter;
    // lvlCounter = numberSwipe;
}
/*FUNCTION COUNTER SWIPE*/

/*PRICE*/
let price = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(3) > h3").innerHTML = 1;
/*PRICE*/

function myLevel() {
    if(lvlCounter >= price){
        lvlCounter -= price;
        levelPhotoMy += 1;
        price = Math.pow(2, price);
        document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(3) > h3").innerHTML = price;
        document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = lvlCounter;
        document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new > h2").innerHTML = levelPhotoMy;
    } else {
        console.log("not enough hearts:(")
    }
}

/*SLIDER RANDOM*/
// let current = 0;
// arrow.addEventListener('click', function() {
//     let rangeLevel = photoFolder.slice(0, levelPhotoMy).flat();
//     countSwipe()
//     let section = document.querySelector("#interface-nudes > div > div.sviper-photo > div > div > img");
//     let iteam = rangeLevel[Math.floor(Math.random() * rangeLevel.length )]
//     section.src = iteam
// });
/*SLIDER RANDOM*/
let current = 0;
function getNextIndex(current, max) {
    current++;
    if (current >= max) return 0;
    return current; 
}

/*SLIDER*/
arrow.addEventListener('click', function() {
    let rangeLevel = photoFolder.slice(0, levelPhotoMy).flat();
    countSwipe()
    let section = document.querySelector("#interface-nudes > div > div.sviper-photo > div > div > img");
    current = getNextIndex(current, rangeLevel.length);
    console.log(current)
    section.src = rangeLevel[current]
});
/*SLIDER*/

levelUp.addEventListener("click", myLevel);

// next.addEventListener('click', function() {
//     var current = +section.getAttribute('data-current');
//     current++;
//     if (current >= array.length) {
//       current = 0;
//     }
//     section.setAttribute('data-current', current);
//     section.innerHTML = array[current];
//   });