let szerokosc = document.getElementById("szerokosc")
let wysokosc = document.getElementById("wysokosc")
let kolor = document.getElementById("kolor")
let prostokat = document.getElementById("prostokat")
let guzik = document.getElementById("guzik")
let obw = document.getElementById("obw")
let pole = document.getElementById("pole")

guzik.addEventListener("click", function(){
prostokat.style.width = szerokosc.value+"cm"
prostokat.style.height = wysokosc.value+"cm"
prostokat.style.background=kolor.value
console.log(szerokosc.value)
console.log(wysokosc.value)
let dzialobw =(2*szerokosc.value)+(2*wysokosc.value)
let dzialpole = szerokosc.value*wysokosc.value
obw.innerText = "Obwód wynosi "+ dzialobw+"cm"
pole.innerHTML = "Pole wynosi "+ dzialpole+"cm<sup>2</sup>"
})

