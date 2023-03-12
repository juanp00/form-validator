function validateRG() {
    const divInputRG = document.querySelector('.form-container-inputs-rg')
    const rgInput = document.getElementById('rg');

    rgInput.addEventListener('input', (event) => {
    let rg = event.target.value;
    let rgLength = event.target.value.length;

    rg = rg.substring(0, 9);

    // Remove tudo que não é dígito
    rg = rg.replace(/\D/g, '');

    // Adiciona a máscara de RG
    rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');

    // Atualiza o valor do input
    event.target.value = rg;

    if(rgLength >= 9) {
        console.log(rgLength)
        divInputRG.classList.remove('input_invalid')
        divInputRG.classList.add('input_valid')
        
      }else{
        divInputRG.classList.remove('input_valid')
        divInputRG.classList.add('input_invalid')
        console.log(rgLength)
      }
    });
}

export default validateRG;