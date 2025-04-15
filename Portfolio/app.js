// navbar code

let navH1 = document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navOptions = document.querySelector(".nav-options");
let navBtn = document.querySelector(".nav-btn");

navH1.addEventListener("mouseover", function() {
    body.style.backgroundColor = "black";
     navH1.style.display = "none";
     navOptions.style.display = "none";
     navBtn.style.display = "none";
     body.innerHTML = `<h1>PORTFOLIO</h1>`

    body.style.color = "palegreen";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.fontSize = "80px"
})

// herosection code

let herosectionRightMyImage = document.querySelector(".herosection-right-myimage");

let originalSrc = "nishant.png";
let changeSrc = "nishant2.png";

herosectionRightMyImage.addEventListener("click", function() {
    if(herosectionRightMyImage.src.includes(originalSrc)) {
        herosectionRightMyImage.src = changeSrc;
    } else {
        herosectionRightMyImage.src = originalSrc
    }
})


// about section
let aboutRightList = document.querySelector(".about-right-skills");
let aboutRightSkills = document.querySelector(".about-right-list");
let aboutRightEducation = document.querySelector(".about-right-education");

let aboutRightList1 = document.querySelector(".about-right-list-1");
let aboutRightList2 = document.querySelector(".about-right-list-2");

aboutRightList1.style.display="none";
aboutRightList2.style.display="block";

aboutRightSkills.addEventListener("click", function() {
    aboutRightList1.style.display="block";
    aboutRightList2.style.display="none";
})

aboutRightEducation.addEventListener("click", function() {
    aboutRightList2.style.display="block";
    aboutRightList1.style.display="none";
})

// services section
