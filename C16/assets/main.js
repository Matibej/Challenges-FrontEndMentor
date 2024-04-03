const menuBtn = document.querySelector(".nav-menu");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-icon")


const openMenu = () =>{
    if (!menu.classList.contains("open")) {
        menu.classList.add("open")
    }
    
}

const closeMenu = () => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    }
}

init = () => {
menuBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)

}


init()
