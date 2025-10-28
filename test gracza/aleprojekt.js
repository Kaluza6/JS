let jed = document.getElementById("jed");
let dwa = document.getElementById("dwa");
let trz = document.getElementById("trz");
let czt = document.getElementById("czt");
let pie = document.getElementById("pie");
let sze = document.getElementById("sze");
let sie = document.getElementById("sie");
let osi = document.getElementById("osi");



jed.addEventListener('click', function() {
  let jedtex = jed.textContent.trim();
console.log(jedtex);
  if (jedtex === '█') {
    jed.textContent = "▓ ***(3)";
  } else if (jedtex === '▓ ***(3)') {
    jed.textContent = "▒ l**(3)";
  } else if (jedtex === '▒ l**(3)'){
    jed.textContent = "░ l*g(3)";
  }
  else if (jedtex === '░ l*g(3)'){
    jed.textContent = "LAG";
    jed.style.fontWeight = "bold";
    document.getElementById("q1").style.display = "none";
  }
});
dwa.addEventListener('click', function() {
  let dwatex = dwa.textContent.trim();
console.log(dwatex);
  if (dwatex === '█') {
    dwa.textContent = "▓ ****(4)";
  } else if (dwatex === '▓ ****(4)') {
    dwa.textContent = "▒ l***(4)";
  } else if (dwatex === '▒ l***(4)'){
    dwa.textContent = "░ l**t(4)";
  }
  else if (dwatex === '░ l**t(4)'){
    dwa.textContent = "LOOT";
    dwa .style.fontWeight = "bold";
    document.getElementById("q2").style.display = "none";
  }
});
trz.addEventListener('click', function() {
  let trztex = trz.textContent.trim();
console.log(trztex);
  if (trztex === '█') {
    trz.textContent = "▓ ****(4)";
  } else if (trztex === '▓ ****(4)') {
    trz.textContent = "▒ n***(4)";
  } else if (trztex === '▒ n***(4)'){
    trz.textContent = "░ n**b(4)";
  }
  else if (trztex === '░ n**b(4)'){
    trz.textContent = "NOOB";
    trz .style.fontWeight = "bold";
    document.getElementById("q3").style.display = "none";
  }
});
czt.addEventListener('click', function() {
  let czttex = czt.textContent.trim();
console.log(czttex);
  if (czttex === '█') {
    czt.textContent = "▓ ******(6)";
  } else if (czttex === '▓ ******(6)') {
    czt.textContent = "▒ a*****(6)";
  } else if (czttex === '▒ a*****(6)'){
    czt.textContent = "░ a****t(6)";
  }
  else if (czttex === '░ a****t(6)'){
    czt.textContent = "AIMBOT";
    czt .style.fontWeight = "bold";
    document.getElementById("q4").style.display = "none";
  }
});
pie.addEventListener('click', function() {
  let pietex = pie.textContent.trim();
console.log(pietex);
  if (pietex === '█') {
    pie.textContent = "▓ ******(6)";
  } else if (pietex === '▓ ******(6)') {
    pie.textContent = "▒ f*****(6)";
  } else if (pietex === '▒ f*****(6)'){
    pie.textContent = "░ f****y(6)";
  }
  else if (pietex === '░ f****y(6)'){
    pie.textContent = "FANBOY";
    pie .style.fontWeight = "bold";
    document.getElementById("q5").style.display = "none";
  }
});
sze.addEventListener('click', function() {
  let szetex = sze.textContent.trim();
console.log(szetex);
  if (szetex === '█') {
    sze.textContent = "▓ ******(6)";
  } else if (szetex === '▓ ******(6)') {
    sze.textContent = "▒ h*****(6)";
  } else if (szetex === '▒ h*****(6)'){
    sze.textContent = "░ h****x(6)";
  }
  else if (szetex === '░ h****x(6)'){
    sze.textContent = "HITBOX";
    sze .style.fontWeight = "bold";
    document.getElementById("q6").style.display = "none";
  }
});
sie.addEventListener('click', function() {
  let sietex = sie.textContent.trim();
console.log(sietex);
  if (sietex === '█') {
    sie.textContent = "▓ *******(7)";
  } else if (sietex === '▓ *******(7)') {
    sie.textContent = "▒ c******(7)";
  } else if (sietex === '▒ c******(7)'){
    sie.textContent = "░ c*****g(7)";
  }
  else if (sietex === '░ c*****g(7)'){
    sie.textContent = "CAMPING";
    sie .style.fontWeight = "bold";
    document.getElementById("q7").style.display = "none";
  }
});
osi.addEventListener('click', function() {
  let ositex = osi.textContent.trim();
console.log(ositex);
  if (ositex === '█') {
    osi.textContent = "▓ *******(7)";
  } else if (ositex === '▓ *******(7)') {
    osi.textContent = "▒ r******(7)";
  } else if (ositex === '▒ r******(7)'){
    osi.textContent = "░ r*****n(7)";
  }
  else if (ositex === '░ r*****n(7)'){
    osi.textContent = "RESPAWN";
    osi .style.fontWeight = "bold";
    document.getElementById("q8").style.display = "none";
  }
});



    function q1() {
      const answer = prompt("Odpowiedź:");
      if (answer === "lag") {
        alert("BRAWO!!!!!!!");
           jed.textContent = "LAG";
        jed.style.fontWeight = "bold";
        document.getElementById("q1").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q2() {
      const answer = prompt("Odpowiedź:");
      if (answer === "loot") {
        alert("BRAWO!!!!!!!");
                dwa.textContent = "LOOT";
        dwa .style.fontWeight = "bold";
        document.getElementById("q2").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q3() {
      const answer = prompt("Odpowiedź:");
      if (answer === "noob") {
        alert("BRAWO!!!!!!!");
                 trz.textContent = "NOOB";
         trz .style.fontWeight = "bold";
         document.getElementById("q3").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q4() {
      const answer = prompt("Odpowiedź:");
      if (answer === "aimbot") {
        alert("BRAWO!!!!!!!");
         czt.textContent = "AIMBOT";
        czt .style.fontWeight = "bold";
        document.getElementById("q4").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q5() {
      const answer = prompt("Odpowiedź:");
      if (answer === "fanboy") {
        alert("BRAWO!!!!!!!");
        pie.textContent = "FANBOY";
        pie .style.fontWeight = "bold";
        document.getElementById("q5").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q6() {
      const answer = prompt("Odpowiedź:");
      if (answer === "hitbox") {
        alert("BRAWO!!!!!!!");
        sze.textContent = "HITBOX";
        sze .style.fontWeight = "bold";
        document.getElementById("q6").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q7() {
      const answer = prompt("Odpowiedź:");
      if (answer === "camping") {
        alert("BRAWO!!!!!!!");
         sie.textContent = "CAMPING";
         sie .style.fontWeight = "bold";
         document.getElementById("q7").style.display = "none";
      } else {
        alert("Głupek");
      }
    }
    function q8() {
      const answer = prompt("Odpowiedź:");
      if (answer === "respawn") {
        alert("BRAWO!!!!!!!");
        osi.textContent = "RESPAWN";
        osi .style.fontWeight = "bold";
        document.getElementById("q8").style.display = "none";
      } else {
        alert("Głupek");
      }
    }