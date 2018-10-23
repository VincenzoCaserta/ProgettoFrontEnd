var array = ["Vincenzo", "Andrea","Carlo"];

function verifica(){
  var nome = document.querySelector('#num').value;
  var trovato = 0;
  var i = 0;
  while( i < array.length && trovato !== 1){
    if(nome === array[i] ){
      trovato = 1;
    }
    i++;

  }

  if(trovato === 1){
    document.getElementById('res').innerHTML = "Abilitato";
  }
  else {
    document.getElementById('res').innerHTML = "Non Abilitato";
  }
}
