var preload_cnt = 0;
var music_url = 'https://github.com/kgretzky/phishfools/raw/refs/heads/main/phishfools.mp3';
var title_url = 'https://github.com/kgretzky/phishfools/raw/refs/heads/main/evilginx-pro.png';
var images = [
    {
        "src": 'https://github.com/kgretzky/phishfools/raw/refs/heads/main/evilginx.png',
        "size": 150
    },
    {
        "src": 'https://github.com/kgretzky/phishfools/raw/refs/heads/main/phish.png',
        "size": 100
    }];
const images_cnt = 10;
const images_preload = [];
var drop_ms = 14694;
var beat_ms = 408;
var set_bps = false;
var winh;
var winw;

const et = document.createElement('img');
et.src = title_url;
et.id = 'evilginx';
et.style.position = 'fixed';
et.style.zIndex = 9999;
et.style.width = '300px';
et.style.transition = 'all 0.2s';
et.style.opacity = 0;
et.style.bottom = '16px';
et.style.right = '32px';
et.style.cursor = 'pointer';
et.onclick = () => { window.location.replace('https://evilginx.com'); }
document.body.appendChild(et);

function loadAudio(url) {
    var audio = new Audio();
    audio.src= music_url;
    audio.preload = "auto";
    audio.autoplay = true;
    audio.volume = 1;
    audio.addEventListener("loadeddata", preloadReady);
    return audio;
}

function drop() {

    et.style.opacity = 1;
    winh = window.innerHeight;
    winw = window.innerWidth;

    function spawnImage(image, start_size) {
        var size = start_size;
        var img = image.cloneNode(true);
        img.style.position = 'fixed';
        img.style.zIndex = 9998;
        img.style.width = size + 'px';
        img.style.animation = 'spin 2s linear infinite';
        img.style.transition = 'all 0.2s';
        img.style.opacity = 1;
        img.style.top = (Math.random() * winh - start_size) + 'px';
        img.style.left = (Math.random() * winw - start_size) + 'px';
        document.body.appendChild(img);

        var int_id = setInterval(() => {
            if (size == start_size) {
                size = start_size+50;
                img.style.width = size + 'px';
            } else {
                size = start_size;
                img.style.width = size + 'px';
            }
        }, beat_ms);

        setTimeout(() => {
            img.style.opacity = "0";
            setTimeout(() => {
                clearInterval(int_id);
                img.remove();
            }, 500);
        }, beat_ms);
    }

    setInterval(() => {
        for (var i = 0; i<images_cnt; i++) {
            for (const img of images) {
                spawnImage(img['image'], img['size']);
            }
        }
    }, beat_ms);

    function flashScreen() {
        var body = document.querySelector("body");
        body.style.backgroundColor = '#700000';
        setTimeout(() => {
            body.style.backgroundColor = '#e2499d';
        }, beat_ms);  // Duration of the flash*/
    }

    for (var i = 0; i<images_cnt; i++) {
        for (const img of images) {
            spawnImage(img['image'], img['size']);
        }
    }
    flashScreen();

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes spin-all {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        body :not(#evilginx) {
            animation: spin-all 5s linear infinite;
        }
    `));
    document.head.appendChild(style);

    setInterval(flashScreen, beat_ms*2);
}

function preloadImages() {
    for (const img of images) {
        const k = document.createElement('img');
        k.src = img.src;
        img.image = k;
        images_preload.push(img);
    }
}

function phishrun() {

    music.play().then(() => {
        if (set_bps) {
            document.removeEventListener("click", phishrun);
            document.removeEventListener("keydown", phishrun);
            set_bps = false;
        }

        setTimeout(() => {
            music.pause();
            music.currentTime = 0;
            music.play();

            t_preload = Date.now();

            setTimeout(() => { drop(); }, drop_ms);
        }, 1000);
    })
    .catch(() => {
        console.log("no interaction - setting breakpoints");

        document.addEventListener("click", phishrun);
        document.addEventListener("keydown", phishrun);
        set_bps = true;
    });
}

preloadImages();
var music = loadAudio(music_url);
function preloadReady() {
    preload_cnt++;
    if (preload_cnt == 1) {
        phishrun();
    }
}
