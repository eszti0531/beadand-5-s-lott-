function otoslotto() {
    let szamok = [];
    while (szamok.length < 5) {
      let szam = Math.floor(Math.random() * 90) + 1;
      if (!szamok.includes(szam)) {
        szamok.push(szam);
      }
    }
    szamok.sort(function(a, b) {
      return a - b;
    });
    return szamok;
  }

  function generateLottoNumbers() {
    let eredmenyParagraph = document.getElementById("eredmeny");
    let eredmeny = otoslotto();
    eredmenyParagraph.textContent = "Az öt véletlenszám: " + eredmeny.join(", ");
  }