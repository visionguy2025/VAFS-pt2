// ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ | BREADCRUMB | ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▼ //
function Breadcrumb(isIndex, pageName='index') {
    // STATE VARIABLES
    const breadcrumbContainer = document.getElementById('breadcrumb');
    let homepageDirectory;
    let homepagePath;
    let routeDirectory;
    let activeLanguage = 'en';
    let link = {
        index: false,
        about: ['home'],
        collection: ['home'],
        contact: ['home'],
        dashboard: ['home'],
        details: ['home', 'collection'],
        favorites: ['home', 'dashboard'],
        library: ['home', 'dashboard']
    }
    // ADJUST CUSTOM DIRECTORIES
    isIndex ? homepageDirectory = '' : '..';
    isIndex ? routeDirectory = './pages' : '.';
    isIndex ? homepagePath = `${homepageDirectory}` : `${homepageDirectory}/index.html`;
    // BREADCRUMB HTML CONTENT
    const breadcrumbHTML = `
        <div class="breadcrumb">
            <a href="#"> $ {link} </a>
            <span> / </span>
        </div>
    `;
    breadcrumbContainer.innerHTML = breadcrumbHTML;
};
// ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ | BREADCRUMB | ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ▲ //
