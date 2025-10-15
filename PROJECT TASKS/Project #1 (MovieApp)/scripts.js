// VARIABLES
let isLogged = false
let activeUser = 0
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

// LOGGED OR GUEST
if(isLogged) {
    document.getElementsByClassName('headerTop_username')[0].innerHTML = `
        <img src="./asset library/avatars/1760353706613-0199dd41-c50c-7830-a634-f34db88e75ee.png" alt="avatar">
        <span>username123</span>
    `
    document.getElementsByClassName('headerTop_buttons')[0].innerHTML = `
        <a href="./pages/dashboard.html">Watch later</a>
        <a href="./pages/dashboard.html">Watched</a>
        <a href="./pages/dashboard.html">Favorites</a>
        <a href="./pages/dashboard.html">Log out</a>
    `
} else {
    document.getElementsByClassName('headerTop_username')[0].innerHTML = `
        <span>Guest</span>
    `
    document.getElementsByClassName('headerTop_buttons')[0].innerHTML = `
        <a href="./pages/login">Sign in / Register</a>
    `
}

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
searchBtn.addEventListener('mouseenter', activateSearchbar)
searchInput.addEventListener('focusin', () => {
    isSearchbarFocus = true
    deactivateSearchbar()
})
searchInput.addEventListener('focusout', () => {
    isSearchbarFocus = false
    deactivateSearchbar()
})
header.addEventListener('mouseleave', deactivateSearchbar)
window.addEventListener('scroll', section1video_play)

// HIDE ELEMETS FOR DEVELOPMENT ENVIRONMENT
// document.getElementsByClassName('header')[0].style.display = 'none'
// document.getElementsByClassName('section1')[0].style.display = 'none'
// document.getElementsByClassName('section2')[0].style.display = 'none'
// document.getElementsByClassName('section3')[0].style.display = 'none'
// document.getElementsByClassName('footer')[0].style.display = 'none'

// + VARIABLES
let currentSect2cardID = 0
const section2cards = Array(...document.getElementsByClassName('section2_carousel-card'))
const section2cardsLastIndex = section2cards.length-1
const currentCardAbout = document.querySelectorAll('.section2_details > p')[0]
const currentCardLink = document.querySelectorAll('.section2_details > a')[0]
const aboutText = {
    action: 'Get ready for heart-pounding excitement with action-packed stories. Explosive stunts, daring heroes, and intense battles await you. Brace yourself for a thrilling ride from start to finish!',
    adventure: 'Embark on epic journeys through unknown worlds. Adventure films are filled with exploration, discovery, and thrilling escapades. Join the heroes as they face danger, solve mysteries, and seek treasure.',
    animation: 'Where imagination meets art! Animation brings fantastical worlds and characters to life in vibrant colors. From family-friendly fun to thought-provoking narratives, animated films captivate all ages.',
    biography: 'Step into the lives of remarkable people. Biography films tell the true stories of individuals who shaped history, overcame adversity, or changed the world. Get inspired by the real-life drama of extraordinary lives.',
    documentary: 'Explore the real world through documentaries. These films shed light on important issues, fascinating events, and untold stories. Whether it’s nature, politics, or culture, documentaries provide a window into our world.',
    drama: 'Experience powerful stories that stir emotions and provoke thought. Drama films delve into complex characters, relationships, and situations, offering profound insights into the human condition.'
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
            
            let selection = element.textContent.trim().toLowerCase()
            index == currentSect2cardID ? currentCardAbout.innerHTML = aboutText[selection] : null
            
            let destination = new URL('./pages/explore.html', window.location)
            destination.searchParams.set('type', 'movie')
            destination.searchParams.set('genre', selection)
            index == currentSect2cardID ? currentCardLink.setAttribute('href', destination) : null
        }
    )
}

// + EVENTS
document.addEventListener('DOMContentLoaded', sect2carousel)

// + VARIABLES
const section3container = document.getElementsByClassName('section3_container')
const section3cards = document.querySelectorAll('.section3_container-card')
const section3_btnPrev = document.getElementById('section3_btn_prev')
const section3_btnNext = document.getElementById('section3_btn_next')
let currentS3cardID = 0

// + HANDLER FUNCTIONS
function sect3carouselSet() {
    section3cards.forEach(
        (element, index) => {
            if(index < currentS3cardID-1) {
                element.style.transform = `translate(-100%, -50%) scale(0.5)`
                element.style.zIndex = `1`
                element.style.filter = `blur(10px) grayscale(1) brightness(0.5)`
                element.firstElementChild.style.visibility = `hidden`
            }
            if(index == currentS3cardID-1) {
                element.style.transform = `translate(-80%, -50%) scale(0.75)`
                element.style.zIndex = `2`
                element.style.filter = `blur(10px) grayscale(1) brightness(0.5)`
                element.firstElementChild.style.visibility = `hidden`
            }
            if(index == currentS3cardID) {
                element.style.transform = `translate(-50%, -50%) scale(1.0)`
                element.style.zIndex = `3`
                element.style.filter = `blur(0px) grayscale(0) brightness(1.0)`
                element.firstElementChild.style.visibility = `visible`
            }
            if(index == currentS3cardID+1) {
                element.style.transform = `translate(-20%, -50%) scale(0.75)`
                element.style.zIndex = `2`
                element.style.filter = `blur(10px) grayscale(1) brightness(0.5)`
                element.firstElementChild.style.visibility = `hidden`
            }
            if(index > currentS3cardID+1) {
                element.style.transform = `translate(0%, -50%) scale(0.5)`
                element.style.zIndex = `1`
                element.style.filter = `blur(10px) grayscale(1) brightness(0.5)`
                element.firstElementChild.style.visibility = `hidden`
            }
        }
    )
}
function sect3carousel_backward() {
    currentS3cardID > 0 ? currentS3cardID-- : currentS3cardID
    sect3carouselSet()
}
function sect3carousel_forward() {
    currentS3cardID < section3cards.length-1 ? currentS3cardID++ : currentS3cardID
    sect3carouselSet()
}

// +EVENTS
section3_btnPrev.addEventListener('click', sect3carousel_backward)
section3_btnNext.addEventListener('click', sect3carousel_forward)
document.addEventListener('DOMContentLoaded', sect3carouselSet)

// + VARABLES
const section4containerMOV = document.getElementsByClassName('section4_top-container')[0]
const section4containerTV = document.getElementsByClassName('section4_bottom-container')[0]
const popularShows = {
    movies: [
        ['./asset library/thumbnails/movies/0.webp', 'The Woman in Cabin 10', '5.9 (18K)'],
        ['./asset library/thumbnails/movies/1.jpg', 'One Battle After Another', '8.3 (102K)'],
        ['./asset library/thumbnails/movies/2.jpg', 'Tron: Ares', '6.7 (17K)'],
        ['./asset library/thumbnails/movies/3.jpg', 'The Lost Bus', '6.9 (21K)'],
        ['./asset library/thumbnails/movies/4.jpeg', 'Play Dirty', '5.9 (14K)'],
        ['./asset library/thumbnails/movies/5.jpeg', 'Weapons', '7.5 (184K)'],
        ['./asset library/thumbnails/movies/6.jpeg', 'The Conjuring: Last Rites', '6.3 (54K)'],
        ['./asset library/thumbnails/movies/7.webp', 'Kantara A Legend: Chapter 1', '8.6 (38K)'],
        ['./asset library/thumbnails/movies/8.jpg', 'The Smashing Machine', '6.8 (33K)'],
    ],
    series: [
        ['./asset library/thumbnails/series/#.png', 'Monster', '7.8 (206k)'],
        ['./asset library/thumbnails/series/#.png', 'Peacemaker', '8.3 (177k)'],
        ['./asset library/thumbnails/series/#.png', 'Boots', '7.9 (4.2k)'],
        ['./asset library/thumbnails/series/#.png', 'The Last Frontier', '7.1 (1.5k)'],
        ['./asset library/thumbnails/series/#.png', 'Task', '7.9 (13k)'],
        ['./asset library/thumbnails/series/#.png', 'House of Guinness', '7.5 (14k)'],
        ['./asset library/thumbnails/series/#.png', 'Wayward', '5.9 (17k)'],
        ['./asset library/thumbnails/series/#.png', 'Black Rabbit', '7.4 (25k)'],
        ['./asset library/thumbnails/series/#.png', 'Wonder Man', '0.0 (0)'],
    ]
}

// + HANDLER FUNCTIONS
function loadSection4Cards() {
    popularShows.movies.forEach(
        (data, key) => {
            const newCard = `
                <div class="section4_card" id="movie_${key}">
                    <a href="./pages/details.html?movie=${key}">
                        <img src="${data[0]}" alt="image">

                        <h3>
                            ${data[1]}
                        </h3>

                        <div>
                            <i class="fa-solid fa-star"></i> <span>${data[2]}</span>
                        </div>
                    </a>
                </div>
            `
            section4containerMOV.innerHTML += newCard
        }
    )
    // popularShows.series.forEach(
    //     (data, key) => {
    //         const newCard = `
    //             <div class="section4_card" id="series_${key}">
    //                 <a href="./pages/details.html?series=${key}">
    //                     <img src=${data[0]} alt="image">
    //                 </a>

    //                 <h3>
    //                     ${data[1]}
    //                 </h3>
    //                 <div>
    //                     <i class="fa-solid fa-star"></i> ${data[2]}
    //                 </div>
    //             </div>
    //         `
    //         section4containerTV.innerHTML += newCard
    //     }
    // )
}

// + EVENTS
addEventListener('DOMContentLoaded', loadSection4Cards)
