import messages from "./messages.js"

// crear fondo
for (let i = 0; i <= 40; i++) {
    let stars = document.createElement('DIV')
    stars.classList.add('star')
    stars.style.zIndex = "-1"

    let size = Math.random() * 20
    stars.style.fontSize = 10 + size+'px'

    stars.style.left = Math.random () * + innerWidth + 'px'
    stars.style.top = Math.random () * + innerHeight + 'px'
    stars.style.filter = `hue-rotate(${i * 5}deg)`

    document.querySelector('body').appendChild(stars)
}

function animatedStart() {
            
    let allStarts = document.querySelectorAll('.star')
    let num = Math.floor(Math.random()*allStarts.length)

    allStarts[num].classList.toggle('animate')
}

setInterval(animatedStart, 50)

// crear cards
const backPage = document.querySelectorAll('.back-page')

backPage.forEach(card =>{
    
    return card.innerHTML = `
        <article class="card"></article>
        <article class="card"></article>
        <article class="card"></article>
    `
})

// agregar notas a los cards
const card = document.querySelectorAll('.card')
card.forEach(alert => {
    return alert.addEventListener('click', note)
})

// function para crear notas
function note() {
    let randomMessage = Math.floor(Math.random() * messages.length)
    
    const alert = document.createElement('ASIDE')
    alert.classList.add('note')
    alert.innerHTML = `
        <section class="container_note">
            <span class="container_message">
                <p>${messages[randomMessage]}</p>
                <span class="close" title="cerrar">x</span>
            </span>
        </section>
    `

    // boton cerrar ventana
    alert.querySelector('.close').addEventListener('click', () => {
        alert.remove()
    })

    return document.body.appendChild(alert)
}

// effect card
const flower = document.querySelector('.flower')
let toogle = document.querySelector('#toogle')

toogle.addEventListener('change', () => {
    
    const container = document.querySelector('.container-card')
    
    if (toogle.checked) {
        
        container.style.transform = 'scale(.6)'
     
        setTimeout(() => {
         document.querySelector('.left-layer').style.transform = 'rotateY(-180deg)'
         document.querySelector('.right-layer').style.transform = 'rotateY(-180deg)'
         
         
         setTimeout(() => {
             document.querySelector('.top-layer').style.transform = 'rotateX(-180deg)'
             document.querySelector('.botton-layer').style.transform = 'rotateX(-180deg)'
             flower.style.opacity = '.5'
     
         }, 600)
     
        }, 600) 

    } else {

        setTimeout(() => {
            document.querySelector('.top-layer').style.transform = 'rotateX(0deg)'
            document.querySelector('.botton-layer').style.transform = 'rotateX(0deg)'

            setTimeout(() => {
                document.querySelector('.left-layer').style.transform = 'rotateY(0)'
                document.querySelector('.right-layer').style.transform = 'rotateY(0)'

                setTimeout(() => {
                    container.style.transform = 'none'
                    flower.style.opacity = '1'
                }, 600);

            }, 400);
            
        }, 300)
        
    }
})

