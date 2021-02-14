const ratings = document.querySelectorAll('.raing')
const ratingsContainer = document.querySelector('.-container')
const sendBtn = document.querySelector('#')
const panel = document.querySelector('#')


ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('', (e) => {
    panel.innerHTML = `

    `
})

function removeActive() {
{
        ratings[i].classList.remove('active')
    }
}