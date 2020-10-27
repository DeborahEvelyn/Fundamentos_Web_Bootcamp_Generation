let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let telefoneOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '80%'
email.style.width = '80%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 )  {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color  = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail válido' 
    txtEmail.style.color  = 'green'
    emailOk = true
  }
}


function validaTelefone () {

    let txtTelefone = document.querySelector('#txtTelefone')
    
    if (telefone.value.length >= 16) {
        txtTelefone.innerHTML = 'Este número é inválido'
        txtTelefone.style.color= 'red'
        
    } else {
        txtTelefone.innerHTML = 'Número válido'
        telefoneOk = true
    }
    
    }


function validaAssunto () {

let txtAssunto = document.querySelector('#txtAssunto')

if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'O texto ultrapassou o limite máximo de 100 caracteres'
    txtAssunto.style.color= 'red'
    
} else {
    txtAssunto.innerHTML = 'Que mensagem incrível!'
    assuntoOk = true
}

}

function enviar () {
    if (nomeOk == true  &&  emailOk == true && telefoneOk == true && assuntoOk == true ){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom (){
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}
function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}
