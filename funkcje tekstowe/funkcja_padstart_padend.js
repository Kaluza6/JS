let akapit = document.getElementById("akapit")
let przyciskpierwszy = document.getElementById("przyciskpierwszy")
let przyciskdrugi = document.getElementById("przyciskdrugi")
przyciskpierwszy.addEventListener("click", function(){
    akapit.innerText = akapit.innerText.padStart(20,"_")
})
przyciskdrugi.addEventListener("click", function(){
    akapit.innerText = akapit.innerText.padEnd(30,".")
})