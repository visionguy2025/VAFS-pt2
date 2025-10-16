// .
const container = document.getElementsByClassName('container')[0]
const box = document.getElementsByClassName('box')[0]

window.addEventListener('scroll', (event) => {
    console.log(
        'container height: ' + container.getBoundingClientRect().height,'\n',
        'scrollY: ' + window.scrollY,'\n',
        'screen height: ' + window.innerHeight,'\n',
        ''
    )
})

// → WHEN CURRENT SCROLL HEIGHT IS ON SELECTED HEIHGT, BEGIN TO RESIZE BOX from 0 to 100% BY SECTION'S SCROLLED PERCENT ← //
