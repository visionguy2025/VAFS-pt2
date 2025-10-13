const submitBtn = document.querySelector('.form > button')
const container = document.querySelector('.container')
const showBtn = document.querySelector('#showBtn')
const clearBtn = document.querySelector('#clearBtn')

function deleteCard(element) {
    element.parentElement.remove()
}

submitBtn.addEventListener('click', () => {
    const inp_firstname = document.querySelector('.form > input[placeholder*="Firstname"]')
    const inp_lastname = document.querySelector('.form > input[placeholder*="Lastname"]')
    const inp_email = document.querySelector('.form > input[placeholder*="Email"]')
    const inp_password = document.querySelector('.form > input[placeholder*="Password"]')
    
    const newCard = `
        <div class="card">
            <span>${inp_firstname.value}</span>
            <span>${inp_lastname.value}</span>
            <span>${inp_email.value}</span>
            <span>${inp_password.value}</span>
            <button onclick="deleteCard(this)">DEL</button>
        </div>
    `
    inp_firstname.value = ``
    inp_lastname.value = ``
    inp_email.value = ``
    inp_password.value = ``

    container.innerHTML += newCard
})
showBtn.addEventListener('click', () => {
    const asideBar = document.getElementsByTagName('aside')[0]
    if(asideBar.style.display != 'flex') {
        asideBar.style.display = 'flex'
    } else {
        asideBar.style.display = 'none'
    }
})
clearBtn.addEventListener('click', () => {
    container.innerHTML = ``
})
