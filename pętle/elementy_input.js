let formularz = document.querySelector('form')
for(let x = 1; x<=100; x++){
    let input = document.createElement('input')
    formularz.appendChild(input)
    input.id="nr"+x
    input.name="nr"+x
    input.style.margin="10px"
    input.style.boxShadow="5px 5px lightblue"
    input.placeholder="Element numer "+x
    if(x%5==0) {
        let kolumny = document.createElement('br')
        formularz.appendChild(kolumny)
    }
}