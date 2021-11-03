window.onload = function() {
    const SUPER_HEART_LIFETIME = 2000;
    const SUPER_HEART_SPAWN_TIME = 10;

    let photoFolder = [
        ["./img/m2ijdMS7wF0.jpg", "./img/HgI3mOkezAw.jpg", "./img/foto-svinoj-tushi.jpg",],
        ["./img/genocid.jpg", "./img/выхухол.jpg", "./img/жемчуг.jpg", "./img/срва.jpg",], 
        ["./img/тигер.jpg", "./img/щековина.jpg",],
    ];

    let elCounter =  document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.heart > h1");
    let elLvlPhoto = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.new > h2");
    let elPrice = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.level > h3");
    let elLevelUp = document.querySelector("#interface-nudes > div > div.btn-iteam > div.lvl_icon.level");

    let lvlCounter = Number(localStorage.lvlCounter || 0)
    elCounter.innerHTML = lvlCounter;

    let levelPhotoMy = Number(localStorage.levelPhotoMy || 1)
    elLvlPhoto.innerHTML = levelPhotoMy;
    
    let price = Number(localStorage.price || 10)
    elPrice.innerHTML = price;

    function saveState() {
        localStorage.lvlCounter = lvlCounter;
        localStorage.levelPhotoMy = levelPhotoMy;
        localStorage.price = price;
    }

    function myLevel() {
        if(lvlCounter < price) {
            return
        }
        lvlCounter -= price;
        levelPhotoMy += 1;
        price = Math.pow(10, levelPhotoMy);
        elPrice.innerHTML = price;
        elCounter.innerHTML = lvlCounter;
        elLvlPhoto.innerHTML = levelPhotoMy;
        saveState()
    }
    
    elLevelUp.addEventListener("click", myLevel);
    
    function getRandomPhoto() {
        const photos = photoFolder.slice(0, levelPhotoMy).flat();
        return photos[Math.floor(Math.random() * photos.length)];
    }
    function makeSlide(src) {
        return `<img class='nude-slide' src=${src}>`;
    }

    function changeSlide() {
        swiper.virtual.appendSlide(makeSlide(getRandomPhoto()));
        lvlCounter += 1;
        elCounter.innerHTML = lvlCounter;
        saveState()
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
     
      swiper.on("slideChange", changeSlide);

    function spawnSuperHeart() {
        let heart = document.createElement('div');
        heart.classList.add('superHeart');
        heart.style.top = Math.floor(Math.random() * 90) + '%';
        heart.style.left = Math.floor(Math.random() * 90) + '%';

        heart.addEventListener('click', function() {
            heart.parentNode.removeChild(heart);
            lvlCounter *= 2;
            elCounter.innerHTML = lvlCounter;
            saveState()            
        });

        const bornTime = new Date().getTime();
        (function die() {
            const currTime = new Date().getTime();
            const diffTime = currTime - bornTime;
            if (diffTime > SUPER_HEART_LIFETIME) {
                heart.parentNode.removeChild(heart);
                return;
            }
            heart.style.opacity =  1 - (diffTime / SUPER_HEART_LIFETIME);
            requestAnimationFrame(die);
        })();

        
        document.querySelector('.wrapper').appendChild(heart);
    }

    setInterval(function() {
        if (Math.floor(Math.random() * SUPER_HEART_SPAWN_TIME) === 0) {
            spawnSuperHeart();
        }
    }, 1000);
}

