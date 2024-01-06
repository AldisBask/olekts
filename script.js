function calculateLength() {
  const centimetriInput = document.getElementById('centimetriInput').value;
  const centimetri = parseFloat(centimetriInput);

  if (!isNaN(centimetri)) {
    const olekts = centimetri / 53.75;
    const collas = centimetri / 2.54;
    const peds = centimetri / 30.48;

    const resultMessage = `Rezultāti:<br>${centimetri} centimetri ir ${olekts.toFixed(2)} olektis, ${collas.toFixed(2)} collas, jeb ${peds.toFixed(2)} pēdas.`;

    document.getElementById('result').innerHTML = resultMessage;
  } else {
    document.getElementById('result').innerHTML = 'Lūdzu, ievadiet derīgu skaitli.';
  }
}
