const menu = document.querySelector(".toggle-menu")
const navbar = document.querySelector(".navbar")
const layout = document.querySelector(".black-layout")
const bookmark = document.querySelector(".bookmark")
const bookmarkImg = document.querySelector(".book-img")
const bookmarkBtn = document.querySelector(".bookmark-btn")
const backProjectBtn = document.querySelector(".back-project")
const form = document.querySelector("form")
const radioOptions = document.querySelectorAll('input[type=radio]')
const test = document.querySelectorAll(".options-container")
const test2 = document.querySelectorAll(".select-pledge")


const toggleMenu = () =>{
    layout.classList.toggle("hide");
    navbar.classList.toggle("open");
}

const toggleLayout = () =>{
    layout.classList.toggle("hide");
    form.classList.remove("open")
    if (navbar.classList.contains("open")) {
        navbar.classList.toggle("open")
        return
    }
}

const bookmarked = () =>{
    bookmark.classList.toggle("bookmarked")
    if(bookmarkImg.classList.contains("mark")) {
        bookmarkImg.classList.remove("mark");
        bookmarkImg.classList.add("marked");
        bookmarkBtn.innerHTML="bookmarked"
        return
    }
    if (bookmarkImg.classList.contains("marked")) {
        bookmarkImg.classList.remove("marked");
        bookmarkImg.classList.add("mark");
        bookmarkBtn.innerHTML="bookmark"
        return
    }

}

const displayOptions = () => {
    layout.classList.toggle("hide");
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open")
        return
    }
    if (!form.classList.contains("open")) {
        form.classList.toggle("open")
        return
    }
}


const controlChecked = () =>{
    let chequeado = false

    radioOptions.forEach((radio)=>{
        if (!radio.checked) {
            return
        }
         chequeado = radio.dataset.option;
         return
    })

    test.forEach((container)=> {
        if (container.dataset.option !== chequeado) {
            container.classList.remove("checked")
            return;
        } 
            container.classList.add("checked")
    })

    test2.forEach((pledge)=> {
        if (pledge.dataset.option !== chequeado) {
            pledge.classList.remove("open")
            return;
        } 
            pledge.classList.add("open")
    })

}


const clicked = (e) =>{
    console.log(e.target.dataset.option);
};


const init = () =>{
    menu.addEventListener("click", toggleMenu);
    layout.addEventListener("click", toggleLayout);
    bookmark.addEventListener("click", bookmarked);
    backProjectBtn.addEventListener("click",displayOptions);
    form.addEventListener("click", controlChecked)

}
init();