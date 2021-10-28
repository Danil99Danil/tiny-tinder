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
// let levelPhotoMy = 1;
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
// let price = 1;

let price = document.querySelector("#interface-nudes > div > div.lvl-btn > div > div:nth-child(3) > h3").innerHTML = 1;
/*PRICE*/

/*FUNCTION SWIPER*/
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

/*FUNCTION SWIPER*/
function range() {
    // return photoFolder.slice(0, levelPhotoMy).flat()
    let rangeLevel = photoFolder.slice(0, levelPhotoMy).flat();
    // return rangeLevel
}
/*FUNCTION NEW PHOTO*/

arrow.addEventListener("click", function(){
    let swipePhot = document.querySelector("#interface-nudes > div > div.sviper-photo > div > div > img");
        if(event.target){
            for(let i = 0; i < photo.length; i++){
                swipePhot.src = photo[i++];
            }
            // swipePhot.src = photo[2];
            countSwipe()
        }
    })

levelUp.addEventListener("click", myLevel);

newBtn.addEventListener("click", range)
// newBtn.addEventListener("click", function(){
//     console.log(range())
// })


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