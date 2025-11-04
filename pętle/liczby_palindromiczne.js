let dwu = document.getElementById('dwu')
let trzy = document.getElementById('trzy')
let cztero = document.getElementById('cztero')
let piecio = document.getElementById('piecio')
let liczby = document.getElementById('liczby')
for(x=10; x<=99; x++){
    const y = x.toString();
    const z = y.split('').reverse().join('');
    for(y === z){
       console.log(y)
        liczby.innerText = y+", "
    }
}