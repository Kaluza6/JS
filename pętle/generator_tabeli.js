let kolumny = document.getElementById('kolumny')
let wiersze = document.getElementById('wiersze')
let generuj = document.getElementById('generuj')
let tabela = document.getElementById('tabela')
generuj.addEventListener("click", function() {
    tabela.innerText=""
    let lkolumny = kolumny.value
    let lwierszy = wiersze.value
    if(lkolumny>500){
        lkolumny = 500
    }
    if(lwierszy>500){
        lwierszy = 500
    }
    console.log(lkolumny)
    console.log(lwierszy)
    for(x=1; x<=lwierszy; x++){
        let wiersze = tabela.appendChild(document.createElement('tr'))
        for(y=1; y<=lkolumny; y++){
            wiersze.appendChild(document.createElement('td')).innerText=x+"|"+y
        }
    }
})