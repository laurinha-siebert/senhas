const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
}

console.log(botoes);function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function aumentaTamanho() {
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
}

console.log(botoes);function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function aumentaTamanho() {
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

// código omitido

const campoSenha = document.querySelector('#campo-senha');

// código omitido
// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

// código omitido
// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

campoSenha.textContent = letrasMaiusculas;

// código omitido
// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
 let numeroAleatorio = Math.random()*letrasMaiusculas.length;
 console.log(numeroAleatorio);
}

campoSenha.value = letrasMaiuscula
// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
 let numeroAleatorio = Math.random()*letrasMaiusculas.length;
 numeroAleatorio = Math.floor(numeroAleatorio);
 console.log(numeroAleatorio);
}

campoSenha.value = letrasMaiusculas;// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
 let numeroAleatorio = Math.random()*letrasMaiusculas.length;
 numeroAleatorio = Math.floor(numeroAleatorio);
 console.log(letrasMaiusculas[numeroAleatorio]);
}

campoSenha.value = letrasMaiusculas;// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
 for (let i = 0; i < tamanhoSenha;i++) {
     let numeroAleatorio = Math.random()*letrasMaiusculas.length;
     numeroAleatorio = Math.floor(numeroAleatorio);
     console.log(letrasMaiusculas[numeroAleatorio]);
 }
}// código omitido

let tamanhoSenha = 5;

// código omitido
// código omitido

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }// código omitido

function geraSenha(){
 let senha = '';
 for (let i = 0; i < tamanhoSenha;i++) {
     let numeroAleatorio = Math.random()*letrasMaiusculas.length;
     numeroAleatorio = Math.floor(numeroAleatorio);
     console.log(letrasMaiusculas[numeroAleatorio]);
 }
}

campoSenha.value = letrasMaiuscu// código omitido

function geraSenha(){
let senha = '';
for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
        console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = letrasMaiusculas;
}// código omitido

function geraSenha(){
let senha = '';
for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = senha;
}
    
}
