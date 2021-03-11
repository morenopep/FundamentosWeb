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


function validaNome(){
    let txt = document.querySelector('#txt-nome')
    if (nome.value.length < 3 ){
        txt.innerHTML = 'nome inválido.'
        txt.styler.color = 'red'
    } else {
        txt.innerHTML = "nome Valido"
        txt.style.color = 'green'
    }   
    
}