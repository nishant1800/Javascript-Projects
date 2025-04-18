// navbar code

let navH1 = document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navOptions = document.querySelector(".nav-options");
let navBtn = document.querySelector(".nav-btn");

navH1.addEventListener("click", function() {
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
// Incomplete
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
let servicesBox1 = document.querySelector(".services-box-1");
let servicesBox2 = document.querySelector(".services-box-2");
let servicesBox3 = document.querySelector(".services-box-3");

let learn = document.querySelectorAll(".learn");

servicesBox1.addEventListener("mouseover", function() {
    servicesBox1.style.backgroundColor="black";
    servicesBox1.style.color="palegreen";
})

servicesBox1.addEventListener("mouseout", function() {
    servicesBox1.style.backgroundColor="palegreen";
    servicesBox1.style.color="black";
})

servicesBox2.addEventListener("mouseover", function() {
    servicesBox2.style.backgroundColor="black";
    servicesBox2.style.color="palegreen";
})

servicesBox2.addEventListener("mouseout", function() {
    servicesBox2.style.backgroundColor="palegreen";
    servicesBox2.style.color="black";
})

servicesBox3.addEventListener("mouseover", function() {
    servicesBox3.style.backgroundColor="black";
    servicesBox3.style.color="palegreen";
})

servicesBox3.addEventListener("mouseout", function() {
    servicesBox3.style.backgroundColor="palegreen";
    servicesBox3.style.color="black";
})

learn.forEach(function(learn) {
    learn.addEventListener("click", function() {
        alert("all details comming soon...");
    })
})

// project sections
let projectsH1 = document.querySelector(".projects-h1");
let projectsBoxes = document.querySelector(".projects-boxes");

projectsH1.addEventListener("click", function() {
    projectsBoxes.style.display="flex";
})

document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelectorAll(this.getAttribute('href')).scrollIntoView({
            behaviour: smooth
        })
    })
})


















