const Email = document.querySelector(".email-bar");
const Submit = document.querySelector("#Formfield");

const CheckEmail = (item) => {
    let valid = false;
    const mail = item.value.trim();
    

    if (IsEmpty(mail)) {
        ShowError(item, "Please provide a valid email adress.")
        return

    } else if (!EmailValid(mail)) {
        ShowError(item, "Please provide a valid email adress.")
    } else {
        Success(item);
        valid = true;
    } return valid;
};

const ShowError = (value, message) => {
	const formField = value.parentElement;
	value.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};

const EmailValid = (value) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(value);
}

const IsEmpty = (value) => !value.length;

const Success = (value) => {
	const formField = value.parentElement;
	value.classList.remove("error");
	const error = formField.querySelector("small");
	error.textContent = "";
};



Submit.addEventListener("submit",(e) => {
	e.preventDefault(); 
    CheckEmail(Email) } ) 