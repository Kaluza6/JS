let pierwszy = document.getElementById("pierwszy")
let drugi = document.getElementById("drugi")
let trzeci = document.getElementById("trzeci")
let przyciskpierwszy = document.getElementById("przyciskpierwszy")
let przyciskdrugi = document.getElementById("przyciskdrugi")
przyciskpierwszy.addEventListener("click", function(){
    drugi.innerText = pierwszy.innerText.slice(9, 19)
    drugi.style.border = "dotted 4px crimson"
    drugi.style.padding = "8px"
})
przyciskdrugi.addEventListener("click", function(){
    trzeci.innerText = pierwszy.innerText.slice(27)
    trzeci.style.border = "double 3px crimson"
    trzeci.style.padding = "8px"
})