// recupere le menu
let menu = document.getElementById('menu')

//  jouter un évènement au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})