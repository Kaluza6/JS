document.addEventListener("DOMContentLoaded", function() {
  let pod = document.querySelectorAll(".pod");
  let odp = document.querySelectorAll(".odp");

  pod.forEach(function(link) {
    let klik = 0;
    let hint = link.nextElementSibling;
    let ans = hint.nextElementSibling;
    let tekst = ans.textContent.trim();

    link.addEventListener("click", function() {
      klik = klik + 1;
      hint.hidden = false;

      if (klik == 1) {
        link.innerText = "▣";
        hint.innerText = "*".repeat(tekst.length) + " (" + tekst.length + ")";
      }
      else if (klik == 2) {
        link.innerText = "▦";
        let nowy = tekst.replace(/./g, "*");
        nowy = tekst[0] + nowy.slice(1);
        hint.innerText = nowy + " (" + tekst.length + ")";
      }
      else if (klik == 3) {
        link.innerText = "▤";
        let nowy = tekst.replace(/./g, "*");
        nowy = tekst[0] + nowy.slice(1, -1) + tekst.slice(-1);
        hint.innerText = nowy + " (" + tekst.length + ")";
      }
      else if (klik == 4) {
        hint.hidden = true;
        ans.hidden = false;
        link.style.display = "none";
        let next = ans.nextElementSibling;
        next.style.display = "none";
      }
    });
  });

  odp.forEach(function(link) {
    link.addEventListener("click", function() {
      let ans = link.previousElementSibling;
      let hint = ans.previousElementSibling;
      let pod = hint.previousElementSibling;
      let tekst = ans.textContent.trim();
      let wpis = prompt("Podaj swoją odpowiedź:");

      if (wpis && wpis.trim().toLowerCase() == tekst.toLowerCase()) {
        alert("To jest poprawna odpowiedź!");
        ans.hidden = false;
        link.style.display = "none";
        pod.style.display = "none";
        hint.hidden = true;
      }
    });
  });
});
