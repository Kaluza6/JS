let dwu = document.getElementById('dwu')
let trzy = document.getElementById('trzy')
let cztero = document.getElementById('cztero')
let piecio = document.getElementById('piecio')
let liczby = document.getElementById('liczby')
dwu.addEventListener("click", function(){
    liczby.innerText=""
for(x=10; x<=99; x++){
    let y = x.toString();
    let z = y.split('').reverse().join('');
    if(y==z){
    console.log(y)
    liczby.innerText +=x+", "
    }
}
})
trzy.addEventListener("click", function(){
    liczby.innerText=""
for(x=100; x<=999; x++){
    let y = x.toString();
    let z = y.split('').reverse().join('');
    if(y==z){
    console.log(y)
    liczby.innerText += " "+x+", "
    }
}
})
cztero.addEventListener("click", function(){
    liczby.innerText=""
for(x=1000; x<=9999; x++){
    let y = x.toString();
    let z = y.split('').reverse().join('');
    if(y==z){
    console.log(y)
    liczby.innerText += " "+x+", "
    }
}
})
piecio.addEventListener("click", function(){
    liczby.innerText=""
for(x=10000; x<=99999; x++){
    let y = x.toString();
    let z = y.split('').reverse().join('');
    if(y==z){
    console.log(y)
    liczby.innerText += " "+x+", "
    }
}
})