// ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ | 2TOP BUTTON | ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ //
function ToTop(isIndex, pageName='index') {
    // STATE VARIABLES
    const toTopBtnContainer = document.getElementById('toTopBtn');
    let homepageDirectory;
    let homepagePath;
    let routeDirectory;
    let assetDirectory;
    let activeLanguage = 'en';
    let sections = {
        index: [
            ['#homeSection', 'Home'],
            ['#movCategorySection', 'Movies'],
            ['#tvsCategorySection', 'Series'],
            ['#topRatedSection', 'Rating'],
            ['#popularSection', 'Popular'],
            ['#movieGenreSection', 'Movies'],
            ['#upcomingSection', 'Upcoming'],
            ['#seriesGenreSection', 'Series'],
            ['#gallerySection', 'Gallery']
        ],
        about: ['#', ''],
        collection: ['#', ''],
        contact: ['#', ''],
        dashboard: ['#', ''],
        details: ['#', ''],
        favorites: ['#', ''],
        library: ['#', ''],
        login: false // totopbutton wont be able in here as like header and footer
    };
    // ADJUST CUSTOM DIRECTORIES
    isIndex ? homepageDirectory = '' : '..';
    isIndex ? routeDirectory = './pages' : '.';
    isIndex ? assetDirectory = '.' : '..';
    isIndex ? homepagePath = `${homepageDirectory}` : `${homepageDirectory}/index.html`;
    // TOPTOPBTN HTML CONTENT
    const ToTopBtnHTML = `
        <!-- JS | LINKS WILL COME FROM ARRAY BY SECTION FOR EACH PAGE -->
        <!-- LINKS -->
        <a href="#homeSection">Home</a>
        <a href="#movCategorySection">Movies</a>
        <a href="#tvsCategorySection">Series</a>
        <a href="#topRatedSection">Rating</a>
        <a href="#popularSection">Popular</a>
        <a href="#movieGenreSection">Genre Movies</a>
        <a href="#upcomingSection">Upcoming</a>
        <a href="#seriesGenreSection">Genre Series</a>
        <a href="#gallerySection">Gallery</a>
        <!-- STATIC FOR HEADER -->
        <div class="toTopBtn_inner">
            <a href="#header">
                <i class="fa-solid fa-chevron-up"></i>
            </a>
        </div>
    `;
    // <!-- HOW TO BEND BUTTONS OR MAKE SEGMENTS ON CIRCLE IN HTML CSS JS -->
    // <!-- toTop button but ! when you hover, it scale up below circle which contains buttons for 9 all sections, it gets sections from array for different page possible issue fix, also it self ups smoothly to header -->
    toTopBtnContainer.innerHTML = ToTopBtnHTML;
};
// ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ | 2TOP BUTTON | ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ //
