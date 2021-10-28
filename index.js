let photoFolder = [
    ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg",],
    ["./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg",], 
    ["./img/тигер.jpg", "./img/щековина.jpg",],
    ];

/*USER FOLDER PHOTO*/
let photo = ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg"];
/*USER FOLDER PHOTO*/

/*ARROW SWIPER*/
let arrow = document.querySelector("#interface-nudes > div > div.sviper-photo > button");
/*ARROW SWIPER*/

/*NUMBER SWIPE*/
let numberSwipe = 0;
let lvlCounter = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = numberSwipe;
/*NUMBER SWIPE*/

/*LEVEL UP*/
let levelUp = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.level");
/*LEVEL UP*/

/*NEW PHOTO*/
let newPhoto = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new");
/*NEW PHOTO*/

/*MU LEVEL PHOTO*/
let levelPhotoMy = 1;
let levelMyNew = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div.lvl_icon.new > h2").innerHTML = levelPhotoMy;
/*MU LEVEL PHOTO*/

/*FUNCTION COUNTER SWIPE*/
function countSwipe() {
    numberSwipe += 1;
    document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = numberSwipe
    lvlCounter = numberSwipe;
}
/*FUNCTION COUNTER SWIPE*/

/*PRICE*/
let price = 1;

let priceUp = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(3) > h3").innerHTML = price;
/*PRICE*/

/*FUNCTION NEW PHOTO*/
// function newLvlPhoto(photoFolder) {
//     photoFolder.map(a => {
//         return a.slice(0, 1);
//     })
// }
// console.log(newLvlPhoto(photoFolder))
/*FUNCTION NEW PHOTO*/

/*FUNCTION SWIPER*/
function myLevel() {
    if(numberSwipe >= price){
        numberSwipe -= price;
        price = Math.pow(2, price);
        document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(3) > h3").innerHTML = price;
        document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(1) > h1").innerHTML = numberSwipe;
        priceUp = price;
    } else {
        console.log("not enough hearts:(")
    }
}
/*FUNCTION SWIPER*/

arrow.addEventListener("click", function(event){
let swipePhot = document.querySelector("#interface-nudes > div > div.sviper-photo > div > div > img");
    if(event.target){
        swipePhot.src = photo[2];
        countSwipe()
    }
})

levelUp.addEventListener("click", myLevel);









// let curentPhoto = [
//     ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg",],
//     ["./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg",], 
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ["./img/тигер.jpg", "./img/щековина.jpg",],
//     ];

// let l = 2;
// function rere(lvl, arr){
// if(l) return arr.slice(0, l);

// }
// let molo = rere(l, curentPhoto);
// function sss(){
// let mas = [];
// for(let i = 0; i < molo.length; i++){
//     for(let j = 0; j < molo[i].length; j++){
//         mas.push(molo[i][j]);
//     }
// }
// return mas
// }
// console.log(sss())