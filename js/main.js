"use strict"

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div nav a');

window.onscroll = () => {
    setActiveOnScroll(sections);
    setBackgroundHeader();
    setAnimationService();
}


window.onload = () => {
    setPositionJob()
}

particlesJS.load('particles-js', 'assets/particles.json', function () {
});

let boxs = document.querySelectorAll(".box");

boxs.forEach(box => {
    VanillaTilt.init(box, {
        max: 25,
        speed: 400,
        glare: true,
    })
});
function getData(form) {
    var formData = new FormData(form);

    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    console.log(Object.fromEntries(formData));
}


document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = new FormData(e.target);
    let formData = Object.fromEntries(form);
    sendEmail(formData)

});
function sendEmail(formData) {
    var message = "Name: " + formData.FistName + " " + formData.LastName + "<br/>";
    message += "Email: " + formData.email + "<br/>";
    message += "Phone: " + formData.phone + "<br/>";
    message += "Message:" + formData.message + "<br/>";
    Email.send({
        SecureToken: "99478b4d-7cf1-4139-b181-91d4769a1b29",
        To: "tan.lenhut97@gmail.com",
        From: "tan.lenhut97@gmail.com",
        Subject: "New Contacts",
        Body: message
    }).then(
        mess => alert(mess)
    );
}



function setActiveOnScroll(sections) {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 500;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        setAnimationAbout(section, false);
        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(navlink => {
                navlink.classList.remove('active');
                if (navlink.getAttribute('href') === ('#' + id)) {
                    navlink.classList.add('active');
                    setAnimationAbout(section, true);
                }
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

function setAnimationAbout(section, isView) {
    if (isView) {
        addAnimateCSS(section, '.caption', 'fadeInUp');
        addAnimateCSS(section, '.about', 'bounceIn');
        addAnimateCSS(section, '.about .image', 'fadeInLeft');
        addAnimateCSS(section, '.about .infor .summary', 'fadeInRight');
        addAnimateCSS(section, '.about .infor .introduction', 'fadeInRight');

    } else {
        removeAnimateCSS(section, '.caption', 'fadeInUp');
        removeAnimateCSS(section, '.about', 'bounceIn');
        removeAnimateCSS(section, '.about .image', 'fadeInLeft');
        removeAnimateCSS(section, '.about .infor .summary', 'fadeInRight');
        removeAnimateCSS(section, '.about .infor .introduction', 'fadeInRight');
    }
}

function setAnimationService() {

        let services = document.querySelector('#service')
        let box = document.querySelectorAll('.box')
        let skill = document.querySelector('.skill')
        let univer = document.querySelector('.univer')
        let img = univer.querySelectorAll('.icon-item')
        let imageCenter = univer.querySelector('.image-center')
        let satellites = univer.querySelectorAll('.satellite')
       
        let top = window.scrollY;
        
        
        let offset = services.offsetTop - 300;
        let height = services.offsetHeight;

        if(top < offset || top > (offset + height)){
       
                removeAnimateCSS(services, '.caption', 'fadeInUp');
                removeAnimateCSS(box[0], '', 'lightSpeedInLeft');
                removeAnimateCSS(box[1], '', 'zoomIn');
                removeAnimateCSS(box[2], '', 'lightSpeedInRight');
                removeAnimateCSS(skill, '.caption', 'fadeInUp');
                img.forEach(element => {
                    removeAnimateCSS(element, '', 'zoomInDown');
                });
                removeAnimateCSS(imageCenter, '', 'zoomIn');
                satellites.forEach(satellite =>{
                    removeAnimateCSS(satellite, '', 'zoomIn');
                })

        }
        if(top >= offset && top < (offset + height)){
            addAnimateCSS(services, '.caption', 'fadeInUp');
            addAnimateCSS(box[0], '', 'lightSpeedInLeft');
            addAnimateCSS(box[1], '', 'zoomIn');
            addAnimateCSS(box[2], '', 'lightSpeedInRight');
        } 

        if(top >= skill.offsetTop && top < (offset + height)){
            addAnimateCSS(skill, '.caption', 'fadeInUp');
            img.forEach(element => {
                addAnimateCSS(element, '', 'zoomInDown');
            });
            addAnimateCSS(imageCenter, '', 'zoomIn');
            satellites.forEach(satellite =>{
                addAnimateCSS(satellite, '', 'zoomIn');
            })
        }

}

function setAminationSection() {
    let top = window.scrollY;
    var section = document.querySelector('header');
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


function addAnimateCSS(element, clazz, animation, prefix = 'animate__') {
    var animationName = `${prefix}${animation}`;
    var node = element;
    if(clazz !== ''){
        node = element.querySelector(clazz);
      }
    if (node) {
        node.classList.add(`${prefix}animated`, animationName);
    }

}
function removeAnimateCSS(element, clazz, animation, prefix = 'animate__') {
    var animationName = `${prefix}${animation}`;
    var node = element;
    if(clazz !== ''){
      node = element.querySelector(clazz);
    }
    if (node) {
        node.classList.remove(`${prefix}animated`, animationName);
        console.log(node)
    }

}