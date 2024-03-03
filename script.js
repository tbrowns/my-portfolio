const menu = document.getElementById('links_container');
const open = document.getElementById('menu-btn');
const close = document.getElementById('close');

const nava = document.getElementById('header');

const links = document.querySelectorAll('#link');

const tab_links = document.querySelectorAll('.tab-links');
const tab_contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.left = "100%";
    })
})

function openmenu() {
  menu.style.left = "30%";
  open.style.display = "none";
  close.style.display = "block";
}

function closemenu() {
  menu.style.left = "100%";
  open.style.display = "block";
  close.style.display = "none";
}

window.onscroll = function () {
    if (window.scrollY >= 100) {
        nava.style.background = "rgba(30,33,37,0.8)"
        nava.style.zIndex = "999999";
        nava.style.boxShadow = "0px 0px 10px black";
    } else {
        nava.style.background = "none"
        nava.style.zIndex = "999999";
        nava.style.boxShadow = "none";
    }
};

tab_links.forEach(tab_link => {
    tab_link.addEventListener('click', () => {
        tab_links.forEach(tab_link => {
            tab_link.classList.remove('active-link');
        })

        tab_contents.forEach(tab_content => {
            tab_content.classList.remove('active-tab');
        })

        tab_link.classList.add('active-link');

        document.getElementById(tab_link.textContent.toLowerCase()).classList.add('active-tab');

    })
    
})

