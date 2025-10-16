// VARIABLES
let isLogged = false;
let activeUser = 0;
const header = document.getElementById('header');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementsByClassName('search_input')[0];
const logoBox = document.getElementsByClassName('headerMain_logo')[0];
const navBar = document.getElementsByClassName('headerMain_navbar')[0];
const searchContainer = document.getElementsByClassName('headerMain_search')[0];
let isSearchbarFocus = false;
const section1video = document.getElementById('section1_video');
let section1video_isPlaying = false;
let section1video_isLockedScroll = true;
let section1video_timePercentage = 0;
const greetingBox = document.getElementById('section1_greeting');
const section1video_span1 = document.querySelector('#section1_greeting > span:nth-of-type(1)');
const section1video_span2 = document.querySelector('#section1_greeting > span:nth-of-type(2)');
const section1video_span3 = document.querySelector('#section1_greeting > span:nth-of-type(3)');

// LOGGED OR GUEST
if(isLogged) {
    document.getElementsByClassName('headerTop_username')[0].innerHTML = `
        <img src="./asset library/avatars/1760353706613-0199dd41-c50c-7830-a634-f34db88e75ee.png" alt="avatar">
        <span>username123</span>
    `;
    document.getElementsByClassName('headerTop_buttons')[0].innerHTML = `
        <a href="./pages/dashboard.html">Watch later</a>
        <a href="./pages/dashboard.html">Watched</a>
        <a href="./pages/dashboard.html">Favorites</a>
        <a href="./pages/dashboard.html">Log out</a>
    `;
} else {
    document.getElementsByClassName('headerTop_username')[0].innerHTML = `
        <span>Guest</span>
    `;
    document.getElementsByClassName('headerTop_buttons')[0].innerHTML = `
        <a href="./pages/login">Sign in / Register</a>
    `;
};

// SET INFO BOX TO USERNAME ON LOAD
if(document.getElementsByClassName('headerTop_username')) {
    let usernameTitlebox = document.getElementsByClassName('headerTop_username')[0];
    usernameTitlebox.setAttribute('title', `Watch later: 2\nWatched: 5\nFavorites: 1`);
};

// HANDLER FUNCTIONS
function activateSearchbar() {
    // event.preventDefault(); // for reset other features like when inside form or have route
    searchInput.style.display = `block`;
    searchInput.style.animation = `searchbarAppear 0.35s ease-in-out 0.01s 1 normal forwards`;
    logoBox.style.display = `none`;
    navBar.style.display = `none`;
    searchContainer.style.gridColumn = `1/7`;
};
function deactivateSearchbar() {
    if(!isSearchbarFocus) {
        searchInput.style.display = `none`;
        searchInput.style.animation = ``;
        logoBox.style.display = `flex`;
        navBar.style.display = `flex`;
        searchContainer.style.gridColumn = `6/7`;
    };
};
function section1video_play() {
    if(section1video_isLockedScroll) {
        window.scrollTo({top: 0});
    };
    if(!section1video_isPlaying && section1video.currentTime != section1video.duration) {
        section1video_isPlaying = true;
        section1video.playbackRate = 3;
        section1video.play();
        section1video_timePercentage = (section1video.currentTime / section1video.duration) * 100;
        section1video_isLockedScroll = true;
        section1video.style.bottom = `0`;
        section1video.style.position = `fixed`;
        section1video.style.height = `calc(100vh - 60px)`;
        section1video.style.marginTop = `60px`;
        greetingBox.style.position = `fixed`;
        greetingBox.style.height = `calc(100vh - 60px)`;
        greetingBox.style.marginTop = `60px`;
        header.style.position = `fixed`;
        setTimeout(
            () => {
                section1video_isPlaying = false;
                section1video.pause();
            }, 100
        );
    } else if(!section1video_isPlaying && section1video.currentTime == section1video.duration) {
        section1video_isLockedScroll = false;
        section1video.style.bottom = `0`;
        section1video.style.position = `absolute`;
        section1video.style.height = `100%`;
        section1video.style.marginTop = `0px`;
        greetingBox.style.position = `absolute`;
        greetingBox.style.height = `100%`;
        greetingBox.style.marginTop = `0px`;
        header.style.position = `relative`;
    };

    if(section1video_timePercentage >= 25 && section1video_timePercentage < 50) {
        section1video_span1.style.display = 'flex';
    } else if(section1video_timePercentage >= 50 && section1video_timePercentage < 75) {
        section1video_span2.style.display = 'flex';
    } else if(section1video_timePercentage >= 75 && section1video.currentTime != section1video.duration) {
        section1video_span3.style.display = 'flex';
    };
};

// EVENTS
searchBtn.addEventListener('mouseenter', activateSearchbar);
searchInput.addEventListener('focusin', () => {
    isSearchbarFocus = true;
    deactivateSearchbar();
});
searchInput.addEventListener('focusout', () => {
    isSearchbarFocus = false;
    deactivateSearchbar();
});
header.addEventListener('mouseleave', deactivateSearchbar);
window.addEventListener('scroll', section1video_play);

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
        ['./asset library/thumbnails/series/0.jpeg', 'Monster', '7.8 (206k)'],
        ['./asset library/thumbnails/series/1.png', 'Peacemaker', '8.3 (177k)'],
        ['./asset library/thumbnails/series/2.webp', 'Boots', '7.9 (4.2k)'],
        ['./asset library/thumbnails/series/3.jpg', 'The Last Frontier', '7.1 (1.5k)'],
        ['./asset library/thumbnails/series/4.jpg', 'Task', '7.9 (13k)'],
        ['./asset library/thumbnails/series/5.webp', 'House of Guinness', '7.5 (14k)'],
        ['./asset library/thumbnails/series/6.jpg', 'Wayward', '5.9 (17k)'],
        ['./asset library/thumbnails/series/7.jpg', 'Black Rabbit', '7.4 (25k)'],
        ['./asset library/thumbnails/series/8.jpg', 'Wonder Man', '0.0 (0)'],
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
    popularShows.series.forEach(
        (data, key) => {
            const newCard = `
                <div class="section4_card" id="series_${key}">
                    <a href="./pages/details.html?series=${key}">
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
            section4containerTV.innerHTML += newCard
        }
    )
}

// + EVENTS
addEventListener('DOMContentLoaded', loadSection4Cards)

// + VARABLES
const toTopBtn = document.querySelector('#toTop')
let is2topBtnHovered = false

// + HANDLER FUNCTIONS
function extendToTopButton() {
    toTopBtn.style.backgroundColor = `transparent`
    toTopBtn.style.backdropFilter = `blur(20px)`
    toTopBtn.style.minWidth = `50px`
    toTopBtn.style.width = `fit-content`
    is2topBtnHovered = true
}
function collapseToTopButton() {
    toTopBtn.style.backgroundColor = `var(--color_theme_50)`
    toTopBtn.style.backdropFilter = `blur(0px)`
    toTopBtn.style.minWidth = `50px`
    toTopBtn.style.width = `50px`
    is2topBtnHovered = false
}

// + EVENTS
toTopBtn.addEventListener('mouseenter', extendToTopButton)
toTopBtn.addEventListener('mouseleave', collapseToTopButton)

// + VARABLES
const section7 = document.getElementById('section7')
const section7video = document.getElementById('section7video')
let previousScrollValue = 0
let scrollDIrection = 'down'
let isScrollingNow = false

// + HANDLER FUNCTIONS
function scrollS7video() {
    previousScrollValue <= window.scrollY ? scrollDIrection = 'down' : scrollDIrection = 'up'

    section7video.playbackRate = 3

    let startingValue = section7.offsetTop - (window.innerHeight / 2)
    let endingValue = section7.offsetTop + (window.innerHeight / 2)

    if(!isScrollingNow) {
        isScrollingNow = true
    }
    
    if(isScrollingNow && scrollDIrection == 'down') {
        if(window.scrollY >= startingValue && window.scrollY <= endingValue) {
            !section7video.ended ? section7video.play() : null
    
            setTimeout(
                () => {
                    isScrollingNow = false
                    section7video.pause()
                }, 50
            )
        }
    }

    previousScrollValue = window.scrollY
}

// + EVENTS
addEventListener('scroll', scrollS7video)

// + VARIABLES
const section8container = document.getElementsByClassName('section8_container')[0]
const section9container = document.getElementsByClassName('section9_container')[0]
const topRatedMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      imdb_point: 9.3,
      imdb_votes: "2.2M",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genres: ["Drama"],
      year: 1994,
      starring: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      directed_by: "Frank Darabont",
      cover: "./asset library/covers/movies/1.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      imdb_point: 9.2,
      imdb_votes: "1.6M",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      genres: ["Crime", "Drama"],
      year: 1972,
      starring: ["Marlon Brando", "Al Pacino", "James Caan"],
      directed_by: "Francis Ford Coppola",
      cover: "./asset library/covers/movies/2.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      imdb_point: 9.0,
      imdb_votes: "2.3M",
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      genres: ["Action", "Crime", "Drama"],
      year: 2008,
      starring: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      directed_by: "Christopher Nolan",
      cover: "./asset library/covers/movies/3.jpg",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      imdb_point: 8.9,
      imdb_votes: "1.9M",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      genres: ["Crime", "Drama"],
      year: 1994,
      starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      directed_by: "Quentin Tarantino",
      cover: "./asset library/covers/movies/4.jpg",
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Return of the King",
      imdb_point: 8.9,
      imdb_votes: "1.7M",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his attention away from Frodo and Sam as they approach Mount Doom with the One Ring.",
      genres: ["Action", "Adventure", "Drama"],
      year: 2003,
      starring: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      directed_by: "Peter Jackson",
      cover: "./asset library/covers/movies/5.jpg",
    },
    {
      id: 6,
      title: "Schindler's List",
      imdb_point: 9.0,
      imdb_votes: "1.2M",
      description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      genres: ["Biography", "Drama", "History"],
      year: 1993,
      starring: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
      directed_by: "Steven Spielberg",
      cover: "./asset library/covers/movies/6.jpg",
    },
    {
      id: 7,
      title: "12 Angry Men",
      imdb_point: 9.0,
      imdb_votes: "650k",
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      genres: ["Drama"],
      year: 1957,
      starring: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
      directed_by: "Sidney Lumet",
      cover: "./asset library/covers/movies/7.jpg",
    },
    {
      id: 8,
      title: "The Good, the Bad and the Ugly",
      imdb_point: 8.8,
      imdb_votes: "700k",
      description: "A bounty hunting scam joins two desperadoes and a third man in a quest to find a fortune in gold buried in a remote cemetery.",
      genres: ["Western"],
      year: 1966,
      starring: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
      directed_by: "Sergio Leone",
      cover: "./asset library/covers/movies/8.jpg",
    },
    {
      id: 9,
      title: "Forrest Gump",
      imdb_point: 8.8,
      imdb_votes: "1.8M",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary quality.",
      genres: ["Drama", "Romance"],
      year: 1994,
      starring: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      directed_by: "Robert Zemeckis",
      cover: "./asset library/covers/movies/9.jpg",
    },
    {
      id: 10,
      title: "Inception",
      imdb_point: 8.8,
      imdb_votes: "2M",
      description: "A thief who enters the minds of others through their dreams is given the task of planting an idea into the mind of a CEO.",
      genres: ["Action", "Adventure", "Sci-Fi"],
      year: 2010,
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      directed_by: "Christopher Nolan",
      cover: "./asset library/covers/movies/10.jpg",
    },
]
const topRatedSeries = [
    {
      id: 1,
      title: "Breaking Bad",
      imdb_point: 9.5,
      imdb_votes: "1M",
      description: "A high school chemistry teacher turned methamphetamine producer teams up with a former student to dominate the drug market.",
      genres: ["Crime", "Drama", "Thriller"],
      year: 2008,
      starring: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
      directed_by: "Vince Gilligan",
      episodes_count: 62,
      cover: "./asset library/covers/series/1.jpg",
    },
    {
      id: 2,
      title: "Game of Thrones",
      imdb_point: 9.3,
      imdb_votes: "1.5M",
      description: "Nine noble families fight for control of the mythical land of Westeros.",
      genres: ["Action", "Adventure", "Drama"],
      year: 2011,
      starring: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
      directed_by: "David Benioff, D.B. Weiss",
      episodes_count: 73,
      cover: "./asset library/covers/series/2.jpg",
    },
    {
      id: 3,
      title: "The Wire",
      imdb_point: 9.3,
      imdb_votes: "300k",
      description: "Set in Baltimore, this show centers on the lives of law enforcement and drug trade, with the aim of showing the flaws in both systems.",
      genres: ["Crime", "Drama", "Thriller"],
      year: 2002,
      starring: ["Dominic West", "Lance Reddick", "John Doman"],
      directed_by: "David Simon",
      episodes_count: 60,
      cover: "./asset library/covers/series/3.jpg",
    },
    {
      id: 4,
      title: "Chernobyl",
      imdb_point: 9.4,
      imdb_votes: "700k",
      description: "A dramatization of the events surrounding the nuclear accident in 1986 and the subsequent cleanup efforts.",
      genres: ["Drama", "History", "Thriller"],
      year: 2019,
      starring: ["Jared Harris", "Stellan Skarsgård", "Emily Watson"],
      directed_by: "Craig Mazin",
      episodes_count: 5,
      cover: "./asset library/covers/series/4.jpg",
    },
    {
      id: 5,
      title: "Friends",
      imdb_point: 8.9,
      imdb_votes: "1.2M",
      description: "Follows the lives of six friends living in New York City.",
      genres: ["Comedy", "Romance"],
      year: 1994,
      starring: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
      directed_by: "David Crane, Marta Kauffman",
      episodes_count: 236,
      cover: "./asset library/covers/series/5.jpg",
    },
    {
      id: 6,
      title: "Stranger Things",
      imdb_point: 8.7,
      imdb_votes: "900k",
      description: "A group of kids in a small town uncover a series of supernatural mysteries.",
      genres: ["Drama", "Fantasy", "Horror"],
      year: 2016,
      starring: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
      directed_by: "The Duffer Brothers",
      episodes_count: 34,
      cover: "./asset library/covers/series/6.jpg",
    },
    {
      id: 7,
      title: "Sherlock",
      imdb_point: 9.1,
      imdb_votes: "800k",
      description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      genres: ["Crime", "Drama", "Mystery"],
      year: 2010,
      starring: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
      directed_by: "Mark Gatiss, Steven Moffat",
      episodes_count: 13,
      cover: "./asset library/covers/series/7.jpg",
    },
    {
      id: 8,
      title: "The Office (US)",
      imdb_point: 8.9,
      imdb_votes: "1.2M",
      description: "A mockumentary on a group of typical office workers, portraying the everyday lives of the employees working at Dunder Mifflin's Scranton, PA branch.",
      genres: ["Comedy"],
      year: 2005,
      starring: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
      directed_by: "Greg Daniels",
      episodes_count: 201,
      cover: "./asset library/covers/series/8.jpg",
    },
    {
      id: 9,
      title: "The Mandalorian",
      imdb_point: 8.8,
      imdb_votes: "500k",
      description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      genres: ["Action", "Adventure", "Fantasy"],
      year: 2019,
      starring: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
      directed_by: "Jon Favreau",
      episodes_count: 24,
      cover: "./asset library/covers/series/9.jpg",
    },
    {
      id: 10,
      title: "Black Mirror",
      imdb_point: 8.8,
      imdb_votes: "900k",
      description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      genres: ["Drama", "Sci-Fi", "Thriller"],
      year: 2011,
      starring: ["Daniel Lapaine", "Hannah John-Kamen", "Wyatt Russell"],
      directed_by: "Charlie Brooker",
      episodes_count: 22,
      cover: "./asset library/covers/series/10.jpg",
    },
]
section8container.innerHTML = ``
section9container.innerHTML = ``

// + HANDLER FUNCTIONS
function loadMovieCards() {
    topRatedMovies.forEach(
        (data, index) => {
            let newShowCard = `
                <div class="topratedCards">
                    <div style="
                        background: url('${data.cover}');
                        background-size: 100% auto;
                        background-position: center;
                        background-repeat: no-repeat;
                    "></div>
                    <a href="./pages/details.html?movie=${data.id + 10}">
                        #${data.id} | ${data.title}
                    </a>
                </div>
            `
            section8container.innerHTML += newShowCard
        }
    )
}
function loadSeriesCards() {
    topRatedSeries.forEach(
        (data, index) => {
            let newShowCard = `
                <div class="topratedCards">
                    <div style="
                        background: url('${data.cover}');
                        background-size: 100% auto;
                        background-position: center;
                        background-repeat: no-repeat;
                    "></div>
                    <a href="./pages/details.html?series=${data.id + 10}">
                        #${data.id} | ${data.title}
                    </a>
                </div>
            `
            section9container.innerHTML += newShowCard
        }
    )
}

// + EVENTS
document.addEventListener('DOMContentLoaded', loadMovieCards)
document.addEventListener('DOMContentLoaded', loadSeriesCards)

// + HANDLER FUNCTIONS
function modalViewToggle(id) {
    document.getElementById(id).classList.toggle('hidden')
}
