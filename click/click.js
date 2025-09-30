const tak = document.querySelector('body')
const p = document.getElementById('paragraf')
tak.addEventListener('keydown', logkey)
function logkey(e){
    p.innerHTML = e.key
    console.log('logkey' + e.code)
    
}