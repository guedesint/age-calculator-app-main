const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const botao = document.querySelector(".logo");
const listaInputs = document.querySelectorAll(".lista-item");
const restultado = document.querySelectorAll(".resultado");
const resultadoDia = document.querySelector(".dias");
const resultadoMes = document.querySelector(".meses");
const resultadoAno = document.querySelector(".anos");
let idade, idadeDia, idadeMes;

botao.addEventListener("click", (event) => {
  event.preventDefault();

  //Pegando valor dos Inputs
  const diaNascimento = parseInt(document.querySelector("#dd").value);
  const mesNascimento = parseInt(document.querySelector("#mm").value);
  const anoNascimento = parseInt(document.querySelector("#yy").value);

  //Pegando datas Atuais
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDate();
  const mesAtual = dataAtual.getMonth() + 1;
  const anoAtual = dataAtual.getFullYear();

  //Validando Valor Inputs
  const validaDia = diaNascimento > 0 && diaNascimento <= 31;
  const validaMes = mesNascimento > 0 && mesNascimento <= 12;
  const validaAno = anoNascimento > 0 && anoNascimento <= anoAtual;

  if (validaDia && validaMes && validaAno) {
    if (
      anoNascimento > anoAtual ||
      (mesNascimento > mesAtual && anoNascimento == anoAtual) ||
      (diaNascimento > diaAtual &&
        mesNascimento == mesAtual &&
        anoNascimento == anoAtual)
    ) {
      return;
    }

    idade = anoAtual - anoNascimento;

    if (mesAtual >= mesNascimento) {
      idadeMes = mesAtual - mesNascimento;
    } else {
      idade--;
      idadeMes = 12 + mesAtual - mesNascimento;
    }

    if (diaAtual >= diaNascimento) {
      idadeDia = diaAtual - diaNascimento;
    } else {
      idadeMes--;
      let days = months[mesAtual - 2];
      idadeDia = days + diaAtual - diaNascimento;
      if (idadeMes < 0) {
        idadeMes = 11;
        idade--;
      }
    }
  }

  resultadoDia.innerHTML = idadeDia;
  resultadoMes.innerHTML = idadeMes;
  resultadoAno.innerHTML = idade;

  listaInputs.forEach((input) => {
    const inputDia = document.querySelector("#dd");
    const inputMes = document.querySelector("#mm");
    const inputAno = document.querySelector("#yy");

    if (!validaDia) {
      const parent = inputDia.parentElement;
      const p = parent.querySelector("p");
      parent.classList.add("error");
      p.innerText = "this field is required";
    } else if (!validaMes) {
      const parent = inputMes.parentElement;
      const p = parent.querySelector("p");
      parent.classList.add("error");
      p.innerText = "this field is required";
    } else if (!validaAno) {
      const parent = inputAno.parentElement;
      const p = parent.querySelector("p");
      parent.classList.add("error");
      p.innerText = "this field is required";
    } else {
      const parent = input.parentElement;
      input.classList.remove("error");
      const p = parent.querySelector("p");
      p.innerText = "";
    }
  });

  if (!validaAno || !validaDia || !validaMes) {
    restultado.forEach((e) => {
      e.innerHTML = " - - ";
    });
  }
});
