// ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ | HEADER COMPONENT | ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ //
function Header(isIndex) {
    // STATE VARIABLES
    const headerContainer = document.getElementById('header');
    let isAuthenticated = false;
    let token;
    let currentUserId;
    let homepageDirectory;
    let homepagePath;
    let routeDirectory;
    let assetDirectory;
    let favoritesCount = 0;
    let userLibrary;
    let userPanelButtons;
    let isLightMode = true;
    let activeLanguage = 'en';
    // ADJUST CUSTOM DIRECTORIES
    isIndex ? homepageDirectory = '' : '..';
    isIndex ? routeDirectory = './pages' : '.';
    isIndex ? assetDirectory = '.' : '..';
    isIndex ? homepagePath = `${homepageDirectory}` : `${homepageDirectory}/index.html`;
    // CHOOSE ACTIVE BUTTONS WHICH DEPENDS ON IS AUTHENTICATED OR NOT
    isAuthenticated ? userLibrary = `
        <button class="btn btn-open headerTop_userlibrary_btn">
            <a href="${routeDirectory}/favorites.html" title="${favoritesCount}">favorites ($?true)</a>
        </button>
        <button class="btn btn-open headerTop_userlibrary_btn">
            <a href="${routeDirectory}/library.html">watch list ($?true)</a>
        </button>` : userLibrary = '';
    isAuthenticated ? userPanelButtons = `
        <button class="btn btn-open headerTop_userpanel_btn">
            <a href="${routeDirectory}/dashboard.html">username</a>
        </button>
        <button class="btn btn-open headerTop_userpanel_btn">
            <a href="${homepagePath}">log out</a>
        </button>
    ` : userPanelButtons = `
        <button class="btn btn-open headerTop_userpanel_btn">
            <a href="${routeDirectory}/login.html">sign in / register</a>
        </button>
    `;
    // CHANGE DYNAMIC VALUES
    isLightMode ? lightModeIcon = `<i class="fa-solid fa-sun"></i>` : lightModeIcon = `<i class="fa-solid fa-moon"></i>`;
    // HEADER HTML CONTENT
    const HeaderHTML = `
            <!-- TOPSIDE OF HEADER -->
            <section class="headerTop">
                <!-- USER LIBRARY IF AUTHORIZED -->
                <div class="headerTop_userlibrary">
                    ${userLibrary}
                </div>
                <!-- AUTHENTICATION / USERNAME -->
                <div class="headerTop_userpanel">
                    ${userPanelButtons}
                </div>
            </section>
            <!-- MAIN CONTAINER OF HEADER -->
            <section class="headerMain">
                <!-- LOGO -->
                <div class="headerMain_logo">
                    <!-- IMAGE -->
                    <img src="${assetDirectory}/asset library/images/components/logo_ai.png" alt="logo">
                    <!-- DROPDOWN FOR FEATURES | LIGHTMODE, LANGBAR -->
                    <div class="dropdown" id="dropdown__logo">
                        <div class="dropdown_logo_light">
                            <div>
                                <div> ${lightModeIcon} </div>
                            </div>
                        </div>
                        <div class="dropdown_logo_lang">
                            <div>
                                <img src="./asset library/images/components/${activeLanguage}.png" alt='flag' />
                                <span>${activeLanguage}</span>
                            </div>
                            <ul>
                                <li>
                                    <img src="./asset library/images/components/az.png" alt="flag" />
                                    <span>az</span>
                                </li>
                                <li>
                                    <img src="./asset library/images/components/en.png" alt="flag" />
                                    <span>en</span>
                                </li>
                                <li>
                                    <img src="./asset library/images/components/tr.png" alt="flag" />
                                    <span>tr</span>
                                </li>
                                <li>
                                    <img src="./asset library/images/components/ua.png" alt="flag" />
                                    <span>ua</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- NAVBAR -->
                <nav class="headerMain_navbar">
                    <li>
                        <a href="${homepagePath}">home</a>
                    </li>
                    <li id="nav__tvs">
                        <!-- LINK TO PAGE -->
                        <a href="${routeDirectory}/collection.html">movies <i class="fa-solid fa-chevron-down"></i></a>
                        <!-- DROPDOWN FOR CATEGORY -->
                        <div class="dropdown" id="dropdown__tvs">
                            <ul class="dropdown_list">
                                <h3>HEADER</h3>
                                <li><a href="${routeDirectory}/collection.html">lorem</a></li>
                                <li><a href="${routeDirectory}/collection.html">ipsum</a></li>
                                <li><a href="${routeDirectory}/collection.html">sit</a></li>
                                <li><a href="${routeDirectory}/collection.html">dolor</a></li>
                            </ul>
                            <ul class="dropdown_list">
                                <h3>HEADER</h3>
                                <li><a href="${routeDirectory}/collection.html">lorem</a></li>
                                <li><a href="${routeDirectory}/collection.html">ipsum</a></li>
                                <li><a href="${routeDirectory}/collection.html">sit</a></li>
                                <li><a href="${routeDirectory}/collection.html">dolor</a></li>
                            </ul>
                        </div>
                    </li>
                    <li id="nav__mov">
                        <!-- LINK TO PAGE -->
                        <a href="${routeDirectory}/collection.html">tv-series <i class="fa-solid fa-chevron-down"></i></a>
                        <!-- DROPDOWN FOR CATEGORY -->
                        <div class="dropdown" id="dropdown__mov">
                            <ul class="dropdown_list">
                                <h3>HEADER</h3>
                                <li><a href="${routeDirectory}/collection.html">lorem</a></li>
                                <li><a href="${routeDirectory}/collection.html">ipsum</a></li>
                                <li><a href="${routeDirectory}/collection.html">sit</a></li>
                                <li><a href="${routeDirectory}/collection.html">dolor</a></li>
                            </ul>
                            <ul class="dropdown_list">
                                <h3>HEADER</h3>
                                <li><a href="${routeDirectory}/collection.html">lorem</a></li>
                                <li><a href="${routeDirectory}/collection.html">ipsum</a></li>
                                <li><a href="${routeDirectory}/collection.html">sit</a></li>
                                <li><a href="${routeDirectory}/collection.html">dolor</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="${routeDirectory}/.about.html">about us</a>
                    </li>
                    <li>
                        <a href="${routeDirectory}/.contact.html">contact</a>
                    </li>
                </nav>
                <!-- BUTTONS -->
                <div class="headerMain_buttons">
                    <form action="./pages/" method="get">
                        <!-- SEARCH BAR -->
                        <input type="search" placeholder="Search">
                        <!-- SEARCH BUTTON -->
                        <a href="${routeDirectory}/collection.html">
                            <button>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </a>
                    </form>
                    <button class="btn btn-open headerMain_buttons_btnMobile">
                        <div class="btnMobile__bars" id="btnMobile_bar_top"></div>
                        <div class="btnMobile__bars" id="btnMobile_bar_middle"></div>
                        <div class="btnMobile__bars" id="btnMobile_bar_bottom"></div>
                    </button>
                </div>
            </section>
    `;
    headerContainer.innerHTML = HeaderHTML;
};
// ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ | HEADER COMPONENT | ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ //
