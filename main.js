const botao = document.querySelector(".logo");
const listaInputs = document.querySelectorAll(".lista-item");
const resultadoDia = document.querySelector(".dias");
const resultadoMes = document.querySelector(".meses");
const resultadoAno = document.querySelector(".anos");
const invalid = document.querySelector(".text-error");
const erroTitulo = document.querySelector(".titulo-lista");
const erroInput = document.querySelector(".input");

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
        const mesDiff = mesAtual - mesNascimento;
        let idade = anoAtual - anoNascimento;
        let idadeDia = diaAtual - diaNascimento;
        let idadeMes = (mesAtual + 12 - mesNascimento) % 12;

        if (mesDiff < 0) {
          idade--;
          mesDiff += 12;
        }

        if (diaAtual < diaNascimento) {
          if (idadeMes === 0) {
            idade--;
            idadeMes += 12;
          }
        }

        if (diaNascimento === diaAtual && mesNascimento === mesAtual) {
          idadeDia = 0;
        }
        // if (idadeMes === idadeMes--) {
        //   idadeMes = 0;
        // }
        switch (mesAtual) {
          case 1:
          case 2:
          case 4:
          case 6:
          case 8:
          case 9:
          case 11:
            // previous month has 31 days
            idadeDia += 31;
            break;
          case 3:
            // previous month has 28 days
            idadeDia += 28;
            break;
          case 5:
          case 7:
          case 10:
          case 12:
            // previous month has 30 days
            idadeDia += 30;
            break;
        }
          

        resultadoDia.innerHTML = idadeDia;
        resultadoMes.innerHTML = idadeMes;
        resultadoAno.innerHTML = idade;

        // function dataInvalida() {

        //   erroTitulo.classList.add("titulo-error");
        //   erroInput.classList.add("input-error");
        //   invalid.style.display = "block";
        // }

        // if (!validaDia || !validaMes || !validaAno) {
        //   const tituloError = document.querySelectorAll('.titulo-lista');
        //   const textError = document.querySelectorAll('.text-error');
        //   const inputError = document.querySelectorAll('.input');
        //   const erro = inputError + textError + tituloError;

        //   tituloError.forEach((e) => {
        //      e.classList.add('titulo-error');
        //   });

        //   textError.forEach((e) => {
        //      e.style.display = 'block'
        //   });

        //   inputError.forEach((e) => {
        //      e.style.border = '1px solid hsl(0, 100%, 67%)'
        //   });

        // }
      }});