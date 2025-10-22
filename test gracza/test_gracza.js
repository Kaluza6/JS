let podpowiedz1 = document.getElementById("podpowiedz1")
let odp1 = document.getElementById("odp1")
let odpowiedz1 = document.getElementById("odpowiedz1")
let pod1 = document.getElementById("pod1")

let podpowiedz2 = document.getElementById("podpowiedz2")
let odp2 = document.getElementById("odp2")
let odpowiedz2 = document.getElementById("odpowiedz2")
let pod2 = document.getElementById("pod2")

let podpowiedz3 = document.getElementById("podpowiedz3")
let odp3 = document.getElementById("odp3")
let odpowiedz3 = document.getElementById("odpowiedz3")
let pod3 = document.getElementById("pod3")

let podpowiedz4 = document.getElementById("podpowiedz4")
let odp4 = document.getElementById("odp4")
let odpowiedz4 = document.getElementById("odpowiedz4")
let pod4 = document.getElementById("pod4")

let podpowiedz5 = document.getElementById("podpowiedz5")
let odp5 = document.getElementById("odp5")
let odpowiedz5 = document.getElementById("odpowiedz5")
let pod5 = document.getElementById("pod5")

let podpowiedz6 = document.getElementById("podpowiedz6")
let odp6 = document.getElementById("odp6")
let odpowiedz6 = document.getElementById("odpowiedz6")
let pod6 = document.getElementById("pod6")

let podpowiedz7 = document.getElementById("podpowiedz7")
let odp7 = document.getElementById("odp7")
let odpowiedz7 = document.getElementById("odpowiedz7")
let pod7 = document.getElementById("pod7")

let podpowiedz8 = document.getElementById("podpowiedz8")
let odp8 = document.getElementById("odp8")
let odpowiedz8 = document.getElementById("odpowiedz8")
let pod8 = document.getElementById("pod8")

odpowiedz1.addEventListener("click", function(){
    prompt("Wpisz odpowiedź")
    if(prompt == odp1.innerText){
        alert("Poprawna odpowiedź!")
        odpowiedz1.remove()
    } else{
        alert("Błędna odpowiedź")
    }
})