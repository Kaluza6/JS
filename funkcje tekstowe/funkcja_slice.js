let pierwszy = document.getElementById("pierwszy")
let drugi = document.getElementById("drugi")
let trzeci = document.getElementById("trzeci")
let przyciskpierwszy = document.getElementById("przyciskpierwszy")
let przyciskdrugi = document.getElementById("przyciskdrugi")
przyciskpierwszy.addEventListener("click", function(){
    drugi.innerText = pierwszy.innerText.slice(26, 36)
    drugi.style.fontSize = "30px"
    drugi.style.fontWeight = "bolder"
    drugi.style.textShadow = "3px 3px 5px red"
})
przyciskdrugi.addEventListener("click", function(){
    trzeci.innerText = pierwszy.innerText.slice(-12,-5)
    trzeci.style.fontSize = "30px"
    trzeci.style.fontStyle = "Italic"
    trzeci.style.textShadow = "blue 2px 2px"
})