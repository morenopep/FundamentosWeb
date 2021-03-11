// case Sensitive = reconhece letras maiusculas e minusculas
// Por tag: getElementByTagName()
// por Id: getElementById()
// por nome: getElemtsByName()
// por classe: getElementByClassName
// por Seletor: querySelector()

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '50%';

//>>>>>>>>>>>>>>VALIDA O CAMPO NOME <<<<<<<<<<<<<<<
function validaNome(){

    let txtnome = document.querySelector('#txt-nome')
    if (nome.value.length < 3 ){
        txtnome.innerHTML = 'nome inválido.'
        txtnome.style.color = 'red'
    } else {
        txtnome.innerHTML = "nome Valido"
        txtnome.style.color = 'green'
        nomeOk = true
    }   
}

// >>>>>>>>>>>>>>Valida o Campo Email<<<<<<<<<<<<<<<<<<
function validaEmail(){
   let txtemail = document.querySelector('#txt-email')

   if (email.value.indexOf('@') == -1){
       txtemail.innerHTML = 'E-mail invalido'
       txtemail.style.color = 'red'       
   } else{
       txtemail.innerHTML = 'Email Valido'
       txtemail.style.color = 'green'
       emailOk = true
   }
}

function validaAssunto(){
    let txtassunto = document.querySelector('#txt-assunto')

    if (assunto.value.length > 100){
        txtassunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres'
        txtassunto.style.color = 'red'
        txtassunto.style.display = 'block'
    }else {
        txtassunto.style.display = 'none'
        assuntoOk = true        
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('formulario enviado com sucesso!')
    }else {
        alert('Preencha o formulario corretamente')        
    }
}

function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}