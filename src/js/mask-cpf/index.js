function maskcpf() {
  const cpfInput = document.getElementById('cpf');
  const divInputCpf = document.querySelector('.form-container-inputs-cpf')

  cpfInput.addEventListener('input', (event) => {

    let cpf = event.target.value;
    let cpfLength = event.target.value.length;

    // Remove tudo que não é dígito
    cpf = cpf.replace(/\D/g, '');

    // Limita o comprimento da string para 11 caracteres
    cpf = cpf.substring(0, 11);

    // Adiciona a máscara de CPF
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, '$1-$2');

    // Atualiza o valor do input
    event.target.value = cpf;

    if(cpfLength >= 14) {
      console.log(cpfLength)
      divInputCpf.classList.remove('input_invalid')
      divInputCpf.classList.add('input_valid')
      
    }else{
      divInputCpf.classList.add('input_invalid')
      console.log(cpfLength)
    }
  });

}

export default maskcpf;

