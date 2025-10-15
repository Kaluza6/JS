let liczba = document.getElementById("liczba")
let wpiszliczbe = prompt("Podaj dowolną liczbę:")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p7 = document.getElementById("p7")
let p8 = document.getElementById("p8")
wpiszliczbe
if(isNaN(wpiszliczbe) == false){
    alert("Dziękuję")
    liczba.innerText = wpiszliczbe
    p1.innerText ="abs("+wpiszliczbe+")="+Math.abs(wpiszliczbe)
    p2.innerText="celi("+wpiszliczbe+")="+Math.ceil(wpiszliczbe)
    p3.innerText="floor("+wpiszliczbe+")="+Math.floor(wpiszliczbe)
    p4.innerText="max("+wpiszliczbe+")="+Math.max(wpiszliczbe)
    p5.innerText="min("+wpiszliczbe+")="+Math.min(wpiszliczbe)
    p6.innerText="pow("+wpiszliczbe+",2)="+Math.pow(wpiszliczbe,2)
    p7.innerText="round("+wpiszliczbe+")="+Math.round(wpiszliczbe)
    p8.innerText="sqrt("+wpiszliczbe+")="+Math.sqrt(wpiszliczbe)
} else {
    alert("To nie jest liczba")
    liczba.innerText = "Przeładuj stronę i wpisz liczbę"
}
