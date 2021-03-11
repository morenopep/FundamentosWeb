// case Sensitive = reconhece letras maiusculas e minusculas
// Por tag: getElementByTagName()
// por Id: getElementById()
// por nome: getElemtsByName()
// por classe: getElementByClassName
// por Seletor: querySelector()

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

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
   }
}