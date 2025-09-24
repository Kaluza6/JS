document.querySelector('header').style.backgroundColor = 'yellow'
const jeden = document.querySelector('header h1')
console.log(jeden)
jeden.style.fontFamily = 'Arial Black'
jeden.textContent = 'Preambuła'
const dwa = document.getElementsByTagName('section')
console.log(dwa)
dwa[0].style.border = '2px solid brown'
dwa[1].style.border = '2px solid brown'
dwa[2].style.border = '2px solid brown'
const maincolumnh1 = document.querySelector('.main_column h1')
console.log(maincolumnh1)
maincolumnh1.textContent =  'Specjalność szefa:'
const maincol = document.querySelector('.main_column')
const p1 = document.createElement('p')
p1.textContent = 'Kebab na frytkach -_-'
maincol.appendChild(p1)
const cztery = document.querySelector('footer')
const cztery1 = document.createElement('div')
cztery.appendChild(cztery1)
const cztery2 = document.querySelector('footer div')
const cztery3 = document.createElement('p')
cztery2.appendChild(cztery3)
cztery3.textContent = '&copy'
cztery1.style.backgroundColor = 'pink'
cztery1.style.textAlign = 'center'
const piec = document.getElementsByTagName('h1')
piec[3].remove()