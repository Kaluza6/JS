let pierwszy = document.getElementById('pierwszy')
let pierwszyprzycisk = document.getElementById('przyciskpierwszy')
let drugiprzycisk = document.getElementById('przyciskdrugi')
pierwszyprzycisk.addEventListener("click", function(){
    pierwszy.innerText = pierwszy.innerText.replace("Edge", "Janusz Explorer")
})
drugiprzycisk.addEventListener("click", function(){
    pierwszy.innerText = pierwszy.innerText.replaceAll("Microsoft", "JanuszPol")
})