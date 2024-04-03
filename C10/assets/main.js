const button = document.querySelector(".nav-menu")
const navbar = document.querySelector(".navbar-list")


const displayMenu = () => {
    navbar.classList.toggle("open")

}




const init = () =>{

 button.addEventListener("click", displayMenu)


}

init()