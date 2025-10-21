let pierwszy = document.getElementById("pierwszy")
let drugi = document.getElementById("drugi")
let trzeci = document.getElementById("trzeci")
let przyciskpierwszy = document.getElementById("przyciskpierwszy")
let przyciskdrugi = document.getElementById("przyciskdrugi")
przyciskpierwszy.addEventListener("click", function(){
    drugi.innerText = pierwszy.innerText.slice(27, 36)
    drugi.style.color = "yellow"
    drugi.style.backgroundColor = "dodgerblue"
    drugi.style.padding = "5px"
})
przyciskdrugi.addEventListener("click", function(){
    trzeci.innerText = pierwszy.innerText.slice(37)
    trzeci.style.color = "yellow"
    trzeci.style.backgroundColor = "tomato"
    trzeci.style.padding = "5px"
})