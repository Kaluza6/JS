let wl1 = document.getElementById("wl1")
let wl2 = document.getElementById("wl2")
let wyl1 = document.getElementById("wyl1")
let wyl2 = document.getElementById("wyl2")
let wlwyl3 = document.getElementById("wlwyl3")

wl1.addEventListener('click', function() {
  document.getElementById('obrazek').src = 'żarówawł.jpg'; 
  document.getElementById('wl2').checked = true; 
  document.getElementById('wyl2').checked = false;
  document.getElementById('wlwyl3').checked = true;
  document.getElementById('twlwyl3').innerText = "Włączona"
});

wyl1.addEventListener('click', function() {
  document.getElementById('obrazek').src = 'żarówawył.jpg'; 
  document.getElementById('wyl2').checked = true; 
  document.getElementById('wl2').checked = false; 
    document.getElementById('wlwyl3').checked = false;
  document.getElementById('twlwyl3').innerText = "Wyłączona"
});
wl2.addEventListener('click', function() {
  document.getElementById('obrazek').src = 'żarówawł.jpg'; 
    document.getElementById('wlwyl3').checked = true;
  document.getElementById('twlwyl3').innerText = "Włączona"
});
wyl2.addEventListener('click', function() {
  document.getElementById('obrazek').src = 'żarówawył.jpg'; 
      document.getElementById('wlwyl3').checked = false;
  document.getElementById('twlwyl3').innerText = "Wyłączona"
});
wlwyl3.addEventListener('click', function() {
    console.log(wlwyl3.checked)
    if (wlwyl3.checked = true){
  document.getElementById('obrazek').src = 'żarówawł.jpg'; 
    document.getElementById('twlwyl3').innerText = "Włączona"
      document.getElementById('wl2').checked = true; 
    } else {
       document.getElementById('obrazek').src = 'żarówawył.jpg';    
         document.getElementById('twlwyl3').innerText = "Wyłączona"
           document.getElementById('wyl2').checked = true; 
    }
})