let liczby = document.querySelector('fieldset')
let suma = document.querySelector('h3')
let wybrane=0
for(x=100; x<=999; x++){
    let liczba = document.createElement('p')
    liczby.appendChild(liczba)
    if(x===999){
        liczba.innerText=x+"."
    } else {
    liczba.innerText = x+", "
    }
    liczba.style.display = "inline"
    let setki = Math.floor(x/100)
    let dziesiatki = Math.floor((x%100)/10)
    let jednosci = Math.floor(x%10)
    if(setki+dziesiatki+jednosci==10){
        liczba.style.color="red"
        wybrane++
        liczba.class="wybrane"
        wybrane
        suma.innerText="Liczb trzycyfrowych, których suma cyfr jest równa 10 jest: "+wybrane
    }
}