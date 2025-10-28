let miesiac = Math.floor(Math.random() *15 +1)
let pierwszy = document.getElementById('pierwszy')
let przycisk = document.getElementById('przycisk')
let drugi = document.getElementById('drugi')
pierwszy.innerText = miesiac
switch(miesiac){
    case 1: drugi.innerText = "I kwartał"
    break;
    case 2: drugi.innerText = "I kwartał"
    break;
    case 3: drugi.innerText = "I kwartał"
    break;
    case 4: drugi.innerText = "II kwartał"
    break;
    case 5: drugi.innerText = "II kwartał"
    break;
    case 6: drugi.innerText = "II kwartał"
    break;
    case 7: drugi.innerText = "III kwartał"
    break;
    case 8: drugi.innerText = "III kwartał"
    break;
    case 9: drugi.innerText = "III kwartał"
    break;
    case 10: drugi.innerText = "IV kwartał"
    break;
    case 11: drugi.innerText = "IV kwartał"
    break;
    case 12: drugi.innerText = "IV kwartał"
    break;
    default:
        drugi.innerText = "Błędny numer miesiąca"
        break;
}
