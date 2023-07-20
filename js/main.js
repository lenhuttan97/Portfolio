"use strict"

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div nav a');

window.onscroll = () => {
    setActiveOnScroll(sections);
    setBackgroundHeader();
}


window.onload = () => {
    setPositionJob()
}


let boxs = document.querySelectorAll(".box");

boxs.forEach(box => {
    VanillaTilt.init(box, {
        max: 25,
        speed: 400,
        glare: true,
    })
});



function setActiveOnScroll(sections) {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(navlink => {
                navlink.classList.remove('active');
                if (navlink.getAttribute('href') === ('#' + id)) navlink.classList.add('active')
            })
        }
    })
}

function setBackgroundHeader() {
    let top = window.scrollY;
    var header = document.querySelector('header');
    var height = document.getElementById('home').offsetHeight;
    if (top >= height * 0.3) {
        header.classList.add('backgroundHeader')
    } else {
        header.classList.remove('backgroundHeader')
    }
}

function setPositionJob() {
    var position = document.getElementById('potiosionHeader');
    var arrJob = ['front-end developer', 'back-end developer', 'full-stack developer'];
    var i = 0;
    var timer = setInterval(function () {
        position.innerHTML = arrJob[i];
        i++;
        if (i > 2) {
            i = 0
        }
    }, 5000);
}

