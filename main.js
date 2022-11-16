// Burger fonction

let burgerLink = document.getElementById('burgerLink');
let burger = document.getElementById('burger');
let burgerListLink = document.getElementById('burgerListLink');

burgerLink.addEventListener('click' , (e) =>{
    e.preventDefault();
    burger.classList.toggle('open');
    burgerListLink.classList.toggle('open');
})

// hidde main site during loader and appear it at the end

let mainSite = document.querySelector(".main-zone")

function appearMainSite () {
    mainSite.classList.remove("hidden")
}
function apparition (){
    setTimeout(appearMainSite, 3500)
}

apparition ();


const appearVideoButton = document.getElementById('appearVideoButton')
const projectVideoViewer = document.getElementById('projectVideoViewer')
const closeVideoViewerButton = document.getElementById('closeVideoViewerButton')
const video = document.getElementById('projectVideo')

appearVideoButton.addEventListener('click', (e) => {
    e.preventDefault()
    projectVideoViewer.classList.toggle('open')
    closeVideoViewerButton.classList.toggle('hidden')
   appearVideoButton.classList.toggle('hidden')
})

closeVideoViewerButton.addEventListener('click', (e) => {
    e.preventDefault()
    projectVideoViewer.classList.toggle('open')
    appearVideoButton.classList.toggle('hidden')
    closeVideoViewerButton.classList.toggle('hidden')
    projectVideo.pause()
})

