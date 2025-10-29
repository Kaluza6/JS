let formularz = document.getElementsByTagName('form')

for(let x = 0; x<=100; x++){
    const input = document.createElement('input')
    formularz.appendChild(input)
    input.value='tak'
}