let miesiac = Math.floor(Math.random() *15 +1)
let pierwszy = document.getElementById('pierwszy')
let przycisk = document.getElementById('przycisk')
let drugi = document.getElementById('drugi')
pierwszy.innerText = miesiac
switch(miesiac){
    case 1:
    case 2:
    case 3: drugi.innerText = "I kwartał"
    break;
    case 4:
    case 5:
    case 6: drugi.innerText = "II kwartał"
    break;
    case 7:
    case 8:
    case 9: drugi.innerText = "III kwartał"
    break;
    case 10:
    case 11:
    case 12: drugi.innerText = "IV kwartał"
    break;
    default:
        drugi.innerText = "Błędny numer miesiąca"
        break;
}
