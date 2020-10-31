let botao = document.querySelector('[type=button]')
let nomeInput = document.querySelector('#nomeInput')
let msg = document.querySelector('#msg')
let idadeInput = document.querySelector('#idadeInput')
let nacionalidadeInput = document.querySelector('#nacionalidadeInput')
let nomeText = document.getElementById('nome')
let lista = document.querySelector('#lista')
let formulario = document.querySelector('form')
let aviso = document.querySelector('#aviso')

// document.querySelectorAll('button') []
// document.getElementsByClassName()
// document.getElementsByTagName('button')

// botao.addEventListener('click', function() {
//   // let input = document.querySelector('#nomeInput')
//   // let nomeText = document.getElementById('nome')
//   let nome = nomeInput.value
// //   input.value = ''
// //   nomeText.textContent = nome

//     let nomeAluno = prompt("Nome do aluno")
//     while(nomeAluno != ''){
//         let novoItem = document.createElement('li')
//         novoItem.textContent = nomeAluno
//         lista.appendChild(novoItem)
//         nomeAluno = prompt("Nome do aluno")
//     }
    
// })

nomeInput.addEventListener('change', function (e) {
    nomeText.textContent = this.value;
}); 

formulario.addEventListener('submit',function(e){
    e.preventDefault()
    validaFormulario()
});


function validaFormulario(){
    if ( nacionalidadeInput.value == 'brasileiro' && idadeInput.value < 18){
        aviso.textContent = 'Não podemos ter alunos brasileiros menores de idade'
    }else{
        aviso.textContent = ''
        // let novoItem = document.createElement('li')
        // novoItem.textContent = nomeInput.value + " tem " + idadeInput.value + " anos"
        // lista.appendChild(novoItem)
        msg.value = nomeInput.value +" é "+ nacionalidadeInput.value + " e tem " + idadeInput.value + " anos"
        formulario.submit()
    }
}

