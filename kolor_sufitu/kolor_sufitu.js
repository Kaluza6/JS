let sufit = document.getElementById('sufit')
sufit.addEventListener('click', function() {
   let wpiszkolor =  prompt('Wpisz kolor sufitu:')
   if(wpiszkolor != null){
    alert('Twoje niebo ma kolor ' + wpiszkolor)
   } else {
    alert('Anulowałeś akcję, a okno prompt zwróciło ' + wpiszkolor)
   }
})