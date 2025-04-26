
let signUpBtn = document.querySelector(".signupbtn");
let signIpBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");

signIpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign in"
    text.innerHTML = "Lost Password";
    signUpBtn.classList.add("disable");
    signIpBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)";
})

signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    text.innerHTML = "Password Suggestion";
    signUpBtn.classList.remove("disable");
    signIpBtn.classList.add("disable");
    underline.style.transform = "translateX(0)";
})
