// VARIABLES
const header = document.getElementById('header')
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementsByClassName('search_input')[0]
const logoBox = document.getElementsByClassName('headerMain_logo')[0]
const navBar = document.getElementsByClassName('headerMain_navbar')[0]
const searchContainer = document.getElementsByClassName('headerMain_search')[0]
let isSearchbarFocus = false
const section1video = document.getElementById('section1_video')
let section1video_isPlaying = false
let section1video_isLockedScroll = true
let section1video_timePercentage = 0
const greetingBox = document.getElementById('section1_greeting')
const section1video_span1 = document.querySelector('#section1_greeting > span:nth-of-type(1)')
const section1video_span2 = document.querySelector('#section1_greeting > span:nth-of-type(2)')
const section1video_span3 = document.querySelector('#section1_greeting > span:nth-of-type(3)')

// SET INFO BOX TO USERNAME ON LOAD
if(document.getElementsByClassName('headerTop_username')) {
    let usernameTitlebox = document.getElementsByClassName('headerTop_username')[0]
    usernameTitlebox.setAttribute('title', `Watch later: 2\nWatched: 5\nFavorites: 1`)
}

// HANDLER FUNCTIONS
function activateSearchbar() {
    // event.preventDefault() // for reset other features like when inside form or have route
    searchInput.style.display = `block`
    searchInput.style.animation = `searchbarAppear 0.35s ease-in-out 0.01s 1 normal forwards`
    logoBox.style.display = `none`
    navBar.style.display = `none`
    searchContainer.style.gridColumn = `1/7`
}
function deactivateSearchbar() {
    if(!isSearchbarFocus) {
        searchInput.style.display = `none`
        searchInput.style.animation = ``
        logoBox.style.display = `flex`
        navBar.style.display = `flex`
        searchContainer.style.gridColumn = `6/7`
    }
}
function section1video_play() {
    if(section1video_isLockedScroll) {
        window.scrollTo({top: 0})
    }
    if(!section1video_isPlaying && section1video.currentTime != section1video.duration) {
        section1video_isPlaying = true
        section1video.playbackRate = 3
        section1video.play()
        section1video_timePercentage = (section1video.currentTime / section1video.duration) * 100
        section1video_isLockedScroll = true
        section1video.style.bottom = `0`
        section1video.style.position = `fixed`
        section1video.style.height = `calc(100vh - 60px)`
        section1video.style.marginTop = `60px`
        greetingBox.style.position = `fixed`
        greetingBox.style.height = `calc(100vh - 60px)`
        greetingBox.style.marginTop = `60px`
        header.style.position = `fixed`
        setTimeout(
            () => {
                section1video_isPlaying = false
                section1video.pause()
            }, 100
        )
    } else if(!section1video_isPlaying && section1video.currentTime == section1video.duration) {
        section1video_isLockedScroll = false
        section1video.style.bottom = `0`
        section1video.style.position = `absolute`
        section1video.style.height = `100%`
        section1video.style.marginTop = `0px`
        greetingBox.style.position = `absolute`
        greetingBox.style.height = `100%`
        greetingBox.style.marginTop = `0px`
        header.style.position = `relative`
    }

    if(section1video_timePercentage >= 25 && section1video_timePercentage < 50) {
        section1video_span1.style.display = 'flex'
    } else if(section1video_timePercentage >= 50 && section1video_timePercentage < 75) {
        section1video_span2.style.display = 'flex'
    } else if(section1video_timePercentage >= 75 && section1video.currentTime != section1video.duration) {
        section1video_span3.style.display = 'flex'
    }
}

// EVENTS
// searchBtn.addEventListener('mouseenter', activateSearchbar)
// searchInput.addEventListener('focusin', () => {
//     isSearchbarFocus = true
//     deactivateSearchbar()
// })
// searchInput.addEventListener('focusout', () => {
//     isSearchbarFocus = false
//     deactivateSearchbar()
// })
// header.addEventListener('mouseleave', deactivateSearchbar)
// window.addEventListener('scroll', section1video_play)

// HIDE ELEMETS FOR DEVELOPMENT ENVIRONMENT
document.getElementsByClassName('header')[0].style.display = 'none'
document.getElementsByClassName('section1')[0].style.display = 'none'
document.getElementsByClassName('footer')[0].style.display = 'none'

// + VARIABLES
const section2cards = Array(...document.getElementsByClassName('section2_carousel-card'))
const section2cardsLastIndex = section2cards.length-1
let currentSect2cardID = 0
const aboutText = {
    action: '',
    adventure: '',
    animation: '',
    biography: '',
    documentary: '',
    drama: ''
}

// + HANDLER FUNCTIONS
function sect2carousel(id) {
    if(id == 'section2_carouselBtn_prev') {
        currentSect2cardID > 0 ? currentSect2cardID-- : currentSect2cardID
    } else if(id == 'section2_carouselBtn_next') {
        currentSect2cardID < section2cardsLastIndex ? currentSect2cardID++ : currentSect2cardID
    }
    section2cards.forEach(
        (element, index) => {
            index == currentSect2cardID ? element.style.transform = `translateX(0%)` : element.style.transform = `translateX(100%)`
            index == currentSect2cardID-1 ? element.style.transform = `translateX(-100%)` : null
            index == currentSect2cardID+1 ? element.style.transform = `translateX(100%)` : null
        }
    )
    
    let currentCardAbout = section2cards[currentSect2cardID].parentElement('p')
    console.log(currentCardAbout)
}

// + EVENTS
document.addEventListener('DOMContentLoaded', sect2carousel)
