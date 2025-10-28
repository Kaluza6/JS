
let przycisk = document.getElementById('przycisk')
let jeden = document.getElementById('jeden')
let dwa = document.getElementById('dwa')
let trzy = document.getElementById('trzy')
let cztery = document.getElementById('cztery')
przycisk.addEventListener("click", function(){
    let losowa  = Math.floor(Math.random() * 30 + 1) 
    jeden.innerText = "Wylosowana liczba to "+losowa
    if(losowa>=20){
    dwa.innerText = "Wylosowana liczba jest równa lub większa 20"
    dwa.style.color = "magenta"
} else {
    dwa.innerText = "Wylosowana liczba nie jest równa lub większa 20"
    dwa.style.color = "magenta"
}
if(losowa%2 == 0){
    trzy.innerText = "Liczba jest parzysta"
    trzy.style.color = "navy"
} else {
    trzy.innerText = "Liczba nie jest parzysta"
    trzy.style.color = "navy"
}
if(losowa<=10){
    cztery.innerText = "Pierwsza dziesiątka"
    cztery.style.color = "deeppink"
} else if (losowa>10, losowa<=20){
    cztery.innerText = "Druga dziesiątka"
    cztery.style.color = "deeppink"
} else if (losowa>20, losowa<=30){
    cztery.innerText = "Trzecia dziesiątka"
    cztery.style.color = "deeppink"
}
})
/*if(losowa>=20){
    dwa.innerText = "Wylosowana liczba jest równa lub większa 20"
    dwa.style.color = "magenta"
}
if(losowa%2 == 0){
    trzy.innerText = "Liczba jest parzysta"
    trzy.style.color = "navy"
} else {
    trzy.innerText = "Liczba nie jest parzysta"
    trzy.style.color = "navy"
}
if(losowa<=10){
    cztery.innerText = "Pierwsza dziesiątka"
    cztery.style.color = "deeppink"
} else if (losowa>10, losowa<=20){
    cztery.innerText = "Druga dziesiątka"
    cztery.style.color = "deeppink"
} else if (losowa>20, losowa<=30){
    cztery.innerText = "Trzecia dziesiątka"
    cztery.style.color = "deeppink"
}*/