const main = document.querySelector("main")
const form = document.querySelector("form")
const score = document.querySelectorAll(".rating")



const renderThanks = (selected) =>{   
    main.innerHTML=`
    <section class="congratulations">
				<div class="img-container">
					<div class="img"></div>
					<div class="score-msg">You selected ${selected} out of 5</div>
				</div>
				<div class="thanks-msg">
					<h2>Thank you!</h2>
					<p>
						We appreciate you taking the time to give a rating. If you ever need
						more support, don’t hesitate to get in touch!
					</p>
				</div>
			</section>
    `
}

const focus = (e) =>{
    const selected = e.target.id;
    const numbers = [...score];

    if (!e.target.classList.contains("rating")) {
        return
    }
    numbers.forEach((number) => {
        if (number.id !== selected) {
            number.classList.remove("focus")
            return
        } number.classList.add("focus")
    })
}

const checkScore = () =>{
     const numbers = [...score];

    numbers.forEach((number)=>{
        if (!number.classList.contains("focus")) {
            return
        }

       renderThanks(number.id)
    })
}



init = () =>{

form.addEventListener("click", (e) =>{
    focus(e);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkScore();
})


}

init()

