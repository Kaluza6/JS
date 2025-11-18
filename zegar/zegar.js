let godz = document.getElementById('godz')
let lgodz = document.getElementById('lgodz')
let minuty = document.getElementById('minuty')
let lmin = document.getElementById('lmin')
let kat = document.getElementById('kat')
let zegar = document.getElementById('zegar')
Math.abs(30*godz.value-(11*minuty.value)/2)
godz.value=0
minuty.value=0
kat.innerHTML = 0+'&deg;'
lgodz.innerText=godz.value
godz.addEventListener("input", function(){
lgodz.innerText=godz.value
kat.innerHTML = Math.abs(30*godz.value-(11*minuty.value)/2)+'&deg;'

})
lmin.innerText=minuty.value
minuty.addEventListener("input", function(){
lmin.innerText=minuty.value
kat.innerHTML = Math.abs(30*godz.value-(11*minuty.value)/2)+'&deg;'
})

