let pierwszy = document.getElementById("pierwszy")
let drugi = document.getElementById("drugi")
let przycisk = document.getElementById("przycisk")
przycisk.addEventListener("click", function(){
    let dlugosc = pierwszy.innerText.length
    drugi.innerHTML = "Tekst powyżej ma długość "+dlugosc+" znaki"
    drugi.style.backgroundColor="#ffdfd3"
    drugi.style.padding="5px"
})