let akapit = document.getElementById("akapit")
let przycisk = document.getElementById("przycisk")
let akapit2 = document.getElementById("akapit2")
let przycisk2 = document.getElementById("przycisk2")
przycisk.addEventListener("click", function(){
    console.table(akapit.innerText.split("|"))
    console.log(akapit.innerText.split("|"))
})
przycisk2.addEventListener("click", function(){
    console.table(akapit2.innerText.split(" ", 17))
    console.log(akapit2.innerText.split(" ", 17))
})