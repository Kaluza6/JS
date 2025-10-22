let akapit = document.getElementById("akapit")
let akapitorg = akapit.innerText
let przyciskpierwszy = document.getElementById("przyciskpierwszy")
let przyciskdrugi = document.getElementById("przyciskdrugi")
let przycisktrzeci = document.getElementById("przycisktrzeci")
przyciskpierwszy.addEventListener("click", function(){
akapit.innerText = akapit.innerText.toUpperCase()
})
przyciskdrugi.addEventListener("click", function(){
akapit.innerText = akapit.innerText.toLowerCase()
})
przycisktrzeci.addEventListener("click", function(){
akapit.innerText = akapitorg
})