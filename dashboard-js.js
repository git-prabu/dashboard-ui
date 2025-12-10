const navClick = document.getElementById("nav-extended")
const navOpen = document.getElementById("nav-extended-page")
const navClose = document.getElementById("nav-close-div")
navClick.addEventListener('click', () =>{
    navOpen.style.display = "flex"
})

navClose.addEventListener('click', () => {
    navOpen.style.display = "none"
})