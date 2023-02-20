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

// for MoneyThunes
const appearVideoButton = document.getElementById('appearVideoButton')
const closeVideoViewerButton = document.getElementById('closeVideoViewerButton')
const projectVideoViewer = document.getElementById('projectVideoViewer')
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

// for findyoursuperhero
const showInsightButton = document.getElementById('showInsightButton')
const closeInsightButton = document.getElementById('closeInsightButton')
const insightVideoViewer = document.getElementById('insightVideoViewer')
const insightVideo = document.getElementById('insightVideo')

showInsightButton.addEventListener('click', (e) => {
    e.preventDefault()
    insightVideoViewer.classList.toggle('open')
    closeInsightButton.classList.toggle('hidden')
   showInsightButton.classList.toggle('hidden')
})

closeInsightButton.addEventListener('click', (e) => {
    e.preventDefault()
    insightVideoViewer.classList.toggle('open')
    closeInsightButton.classList.toggle('hidden')
    showInsightButton.classList.toggle('hidden')
    insightVideo.pause()
})