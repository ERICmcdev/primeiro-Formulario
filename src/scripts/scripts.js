const viewAndNotViewPasswordButton = document.querySelector(".view-password-button--registration--page")
const passwordInput = document.getElementById("password-registration-page")

const viewAndNotViewPasswordButtonSecond = document.querySelector(".view-password-button--registration--page--second")
const passwordInputSecond = document.getElementById("password-registration-page--second")

const PasswordButtonLoginPage = document.querySelector(".view-password-button--login--page")
const passwordInputLoginPage = document.getElementById("password-login-page")

const viewAndNotView = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}

const viewAndNotViewSecond = () => {
    if (passwordInputSecond.type === "password") {
        passwordInputSecond.type = "text"
    } else {
        passwordInputSecond.type = "password"
    }
}

const viewAndNotViewLogin = () => {
    if (passwordInputLoginPage.type === "password") {
        passwordInputLoginPage.type = "text"
    } else {
        passwordInputLoginPage.type = "password"
    }
}

viewAndNotViewPasswordButton.addEventListener("click", function () {
    viewAndNotView()
})

viewAndNotViewPasswordButtonSecond.addEventListener("click", function () {
    viewAndNotViewSecond()
})

PasswordButtonLoginPage.addEventListener("click", function () {
    viewAndNotViewLogin()
})

//ta com um bug na pagina de login, no view and not view, vou resolver dia 21/01/2022 hoje é 20/01/2022 21:12 hrs, boa noite!



