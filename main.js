function classificaSenha() {
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    console.log(entropia);
    function geraSenha() {
    let alfabeto = '';
    // código omitido
    classificaSenha(alfabeto.length);
}function classificaSenha(tamanhoAlfabeto) {
    // código omitido
}
if (entropia > 11){
    forcaSenha.classList.add('forte');
} else if (entropia > 5 && entropia < 12 ) {
    forcaSenha.classList.add('media');
} else if (entropia <= 5){
    forcaSenha.classList.add('fraca');
}if (entropia > 57){
    forcaSenha.classList.add('forte');
} else if (entropia > 35 && entropia < 57 ) {
    forcaSenha.classList.add('media');
} else if (entropia <= 35){
    forcaSenha.classList.add('fraca');
}const valorEntropia = document.querySelector('.entropia');
valorEntropia.textContent = entropia;
valorEntropia.textContent = 2**Math.floor(entropia);valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);




valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
valorEntropia.textContent = Math.floor(2**entropia/(100e6*60*60*24))

valorEntropia.textContent = Math.floor(2**entropia/(100e6*60*60*24));
valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24));
valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";

