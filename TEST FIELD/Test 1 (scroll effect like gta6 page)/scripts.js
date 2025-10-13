// CONSTANT & STARTING VALUES
const text = document.getElementsByClassName('text')[0];
const video = document.getElementById('video');
let isScrolling = false;
let videoWDratio = 0;
let blurValue = 0;
video.currentTime = 0.001;

// HANDLE FUNCTIONS
function handleVideo() {
    // PLAY VIDEO BY SCROLLING START
    video.play();
    
    // STOP VIDEO BY SCROLLING END
    let stopVideo;
    clearTimeout(stopVideo);
    stopVideo = setTimeout(() => {
        video.pause();
    }, 10);

    // SET RESULT PERCENTAGE FOR OTHER EFFECTS
    videoWDratio = (video.currentTime / video.duration) * 100;

    // SET SCALE DOWN TEXT SIZE
    let value = 50 - ((50 * videoWDratio) / 100);
    let size = value + 'rem';
    let blur = blurValue + 'px';

    // SET EFFECT VALUES
    value > 10 ? text.style.fontSize = size : text.style.fontSize = "10rem";
    value < 20 ? text.style.backdropFilter = `blur(${blur})` : text.style.backdropFilter = `blur(0px)`;
    if(value < 20) {
        blurValue + 0.05 <= 50 ? blurValue++ : blurValue
    }

    // CONSOLE
    console.log(`
        text.style.fontSize: ${text.style.fontSize}
        size: ${size}
        blur: ${blur}
    `);
};

// EVENTS
window.addEventListener('wheel', handleVideo);
