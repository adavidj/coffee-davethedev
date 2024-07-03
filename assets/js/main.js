onload = () =>{
    const load = document.getElementById('load')

    setTimeout(() =>{
        load.style.display = 'none'
    }, 2500)
}


//menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


//validation
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


//menu du mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    //Quand on va cliquer sur un nav_link, ça va remove la classe du show-menu pour afficher la page
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

// Change header background


function scrollHeader(){
    const header = document.getElementById('header')

    //Quand le scroll dépassera envir 50 h, ajout d'un scroll head class
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//mix
let mixerProducts = mixitup('.products_content', {
    selectors: {
        target:'.products_card'
    },
    animation:{
        duration: 300
    }
})


/* Default filter products */ 
mixerProducts.filter('.delicacies')

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products_item')

function activeProducts(){
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts))


/*===SHOW SCROLL UP =====*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*====== SCROLL SECTIONS ACTIVE LINK ===*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href* = ' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href* = ' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)