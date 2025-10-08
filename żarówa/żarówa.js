let wl1 = document.getElementById("wl1")
let wl2 = document.getElementById("wl2")
let wyl1 = document.getElementById("wyl1")
let wyl2 = document.getElementById("wyl2")
let wlwyl3 = document.getElementById("wlwyl3")
let obrazek = document.getElementById('obrazek')
let twlwyl3 = document.getElementById('twlwyl3')

wl1.addEventListener('click', function() {
  obrazek.src = 'żarówawł.jpg'; 
  wl2.checked = true; 
  wyl2.checked = false;
  wlwyl3.checked = true;
  twlwyl3.innerText = "Włączona"
});

wyl1.addEventListener('click', function() {
  obrazek.src = 'żarówawył.jpg'; 
  wyl2.checked = true; 
  wl2.checked = false; 
  wlwyl3.checked = false;
  twlwyl3.innerText = "Wyłączona"
});
wl2.addEventListener('click', function() {
  obrazek.src = 'żarówawł.jpg'; 
  wlwyl3.checked = true;
  twlwyl3.innerText = "Włączona"
});
wyl2.addEventListener('click', function() {
  obrazek.src = 'żarówawył.jpg'; 
  wlwyl3.checked = false;
  twlwyl3.innerText = "Wyłączona"
});
wlwyl3.addEventListener('click', function() {
    if (wlwyl3.checked == true){
      obrazek.src = 'żarówawł.jpg'; 
      twlwyl3.innerText = "Włączona"
      wl2.checked = true; 
    } else {
      obrazek.src = 'żarówawył.jpg';    
      twlwyl3.innerText = "Wyłączona"
      wyl2.checked = true; 
      wlwyl3.checked = false
    }
})