const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = '#e9e9e9'

const news = document.querySelector(".news")
news.style.backgroundColor = "white"
news.style.maxWidth = "60rem"

const nadpis = document.querySelector("h1")
nadpis.className = "news__title"
nadpis.textContent = "Aktualni novinky"


const firstMessage = document.getElementById("zprava1")
firstMessage.classList.add("post--main")


const thirdMessage = document.querySelector("#zprava3 img")
thirdMessage.src = "images/zprava3-novy.jpg"


