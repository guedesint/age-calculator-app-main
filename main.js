const listaInput = document.querySelectorAll(".input");
const listaResultado = document.querySelectorAll(".resultado");
const botao = document.querySelector(".botaoTeste");

//to conseguindo pegar os dados mas nao consigo substituir para o atuliza dados
function pegarDados() {
  listaInput.forEach((eInput, iInput) => {
    const valorData = eInput.value;
    console.log(valorData);
    return valorData;
  });
}
pegarDados();

function atualizaDados(pegarDados) {
  listaResultado.forEach((eResultado, iResultado) => {
    eResultado.innerHTML = "1";
  });
}
atualizaDados();

botao.addEventListener("click", atualizaDados);

// function retornandoResultado() {
//   listaResultado.forEach((r) => {
//      console.log(r.textContent);
//   });
// }
// retornandoResultado()
