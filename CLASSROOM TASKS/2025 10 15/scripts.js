// VARIABLES
const container = document.getElementsByClassName('container')[0]
const bird = document.getElementsByClassName('bird')[0]
let positionVertical = 0
let positionHorizontal = 0
// let isFalling = false

addEventListener('keydown', (event) => {
    if(event.key == 'ArrowUp') {
        positionVertical += 10
        bird.style.bottom = positionVertical + 'px'
    } else if(event.key == 'ArrowDown') {
        positionVertical -= 10
        bird.style.bottom = positionVertical + 'px'
    } else if(event.key == 'ArrowLeft') {
        positionHorizontal -= 10
        bird.style.left = positionHorizontal + 'px'
    } else if(event.key == 'ArrowRight') {
        positionHorizontal += 10
        bird.style.left = positionHorizontal + 'px'
    }

    // positionVertical > 0 ? isFalling = true : isFalling = false

    // if(isFalling) {
    //     setInterval(
    //         () => {
    //             if(positionVertical > 0) {
    //                 if(positionVertical - 10 > 0) {
    //                     positionVertical -= 10
    //                 } else if(positionVertical < 10 && positionVertical > 0) {
    //                     positionVertical = 0
    //                 }
    //             }
    //         }, 50
    //     )
    // }
})
