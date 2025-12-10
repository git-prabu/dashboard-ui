const navClick = document.getElementById("nav-extended")
const navOpen = document.getElementById("nav-extended-page")
const navClose = document.getElementById("nav-close-div")
const theme = document.getElementById("light-dark")
const themeDark = document.getElementById("theme-icon-dark")
const headerTheme = document.getElementById("header-theme")
const fontTheme = document.getElementById("fontTheme")
const fontTheme2= document.getElementById("fontTheme2")
const fontTheme3 = document.getElementById("fontTheme3")
const fontTheme4 = document.getElementById("fontTheme4")
const fontTheme5 = document.getElementById("fontTheme5")

navClick.addEventListener('click', () =>{
    navOpen.style.display = "flex"
})

navClose.addEventListener('click', () => {
    navOpen.style.display = "none"
})


theme.addEventListener('click', () => {
    document.body.style.backgroundColor = "#202020ff"; 
    themeDark.style.display = "flex"
    theme.style.display = "none"
    headerTheme.style.backgroundColor= "rgb(30, 32, 59)"
    fontTheme.style.color = "white"
    fontTheme2.style.color = "white"
    fontTheme3.style.color = "white"
    fontTheme4.style.color = "white"
})

themeDark.addEventListener('click', () => {
    document.body.style.backgroundColor = "white"; 
    theme.style.display = "flex"
    themeDark.style.display = "none"
    headerTheme.style.backgroundColor= "white"
    fontTheme.style.color = "black"
    fontTheme2.style.color = "black"
    fontTheme3.style.color = "black"
    fontTheme4.style.color = "black"
})

