if(document.getElementsByClassName('headerTop_username')) {
    let usernameTitlebox = document.getElementsByClassName('headerTop_username')[0]
    usernameTitlebox.setAttribute('title', `Watch later: 2\nWatched: 5\nFavorites: 1`)
}

document.getElementById('searchBtn').addEventListener('mouseover', () => {
    document.querySelector('.search_input')[0].style.display = `block`
    document.querySelector('.headerMain_logo')[0].style.display = `none`
    document.querySelector('.headerMain_navbar')[0].style.display = `none`
    document.querySelector('.headerMain_search')[0].style.gridColumn = `1/7`
    document.body.style.backgroundColor = `red`
})
