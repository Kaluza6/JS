let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let ilewyrazow = document.getElementById('ilewyrazow')
let przycisk = document.getElementById('przycisk')
let wynik = document.getElementById('wynik')
let suma = document.getElementById('suma')
oblwynik= a2 - a1
przycisk.addEventListener("click", function(){
    if(isNaN(a1) == flase && isNaN(a2) == false){
        if(ilewyrazow != null && ilewyrazow>=1){
            wynik.appendChild("ul")
            if(ilewyrazow<=6){
            for(i=1;i<=ilewyrazow;i++){
                document.querySelector("<ul>").appendChild("li")
                document.querySelector("<li>").innerHTML = "a<sub>"+i+"</sub> = "+a1 + i*oblwynik
            }
        }
        }
    }
})