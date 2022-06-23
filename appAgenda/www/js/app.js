function SalvarContato() {
    nome = document.getElementById("nome").value
    telefone = document.getElementById("telefone").value
    let novoContato = `<li>${nome} -${telefone} <li>`
    document.getElementById("lista-contatos").innerHTML = novoContato
    localStorage.listaContatos = novoContato
}

btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function () {
    SalvarContato()

})
if (localStorage.listaContatos){
document.getElementById("lista-contatos").innerHTML = localStorage.listaContatos
}

btLimpar = doc