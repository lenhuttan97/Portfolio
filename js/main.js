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
    console.log(formData);
    var message = "Name: " + formData.FistName + " " + formData.LastName + "<br/>";
    message += "Email: " + formData.email + "<br/>";
    message += "Phone: " + formData.phone + "<br/>";
    message += "Message:" + formData.message + "<br/>";
    Email.send({
        SecureToken : "99478b4d-7cf1-4139-b181-91d4769a1b29",
        To : "tan.lenhut97@gmail.com" ,
        From : "tan.lenhut97@gmail.com",
        Subject : "New Contacts",
        Body : message
    }).then(
      mess => alert(mess)
    );
}  



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

