let photoFolder = [
    ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg",],
    ["./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg",], 
    ["./img/тигер.jpg", "./img/щековина.jpg",],
    ];


let arrow = document.querySelector("#interface-nudes > div > div > button");
let lvlCounter = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.heart > h1").innerHTML = 0;
let levelUp = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.level");
let newPhoto = document.querySelector("#interface-nudes > div > div > div > div.lvl_icon.new");
let levelPhotoMy = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.new > h2").innerHTML = 1;
let price = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.level > h3").innerHTML = 1;

function myLevel() {
    if(lvlCounter >= price){
        lvlCounter -= price;
        levelPhotoMy += 1;
        price = Math.pow(2, price);
        document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.level > h3").innerHTML = price;
        document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.heart > h1").innerHTML = lvlCounter;
        document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.new > h2").innerHTML = levelPhotoMy;
    } else {
        console.log("not enough hearts:(")
    }
}

let current = 0;
function getNextIndex(current, max) {
    current++;
    if (current >= max) return 0;
    return current; 
}

function getRandomPhoto() {
    const photos = photoFolder.slice(0, levelPhotoMy).flat();
    return photos[Math.floor(Math.random() * photos.length)];
}

levelUp.addEventListener("click", myLevel);

window.onload = function() {
    function makeSlide(src) {
        return `<img class='nude-slide' src=${src}>`;
    }

    const swiper = new Swiper('.swiper', {
        virtual: {
            slides: [makeSlide(getRandomPhoto()), makeSlide(getRandomPhoto())],
            enabled: true,
            cache: false,
        },

        direction: 'horizontal',
        allowSlidePrev: false,
        
        navigation: {
          nextEl: '.swiper-button-next',
        },
      });
    
      swiper.on("slideChange", function() {
        swiper.virtual.appendSlide(makeSlide(getRandomPhoto()));
        lvlCounter += 1;
        document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.heart > h1").innerHTML = lvlCounter;
      })
}