function submitForm() {
    const form = document.querySelector('.container-form-element')
    const nome = document.querySelector('.form-container-inputs-name').classList
    const cpf = document.querySelector('.form-container-inputs-cpf').classList
    const rg = document.querySelector('.form-container-inputs-rg').classList
    const email = document.querySelector('.form-container-inputs-email').classList
    const person = document.querySelector('.form-input-person').classList
    const alertSubmit = document.getElementById('alertSubmit')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if(nome[1] === "input_invalid" || cpf[1] === "input_invalid" || rg[1] === "input_invalid" || email[1] === "input_invalid" || person[1] === "input_invalid")   {
            alertSubmit.classList.remove('invisible')
            alertSubmit.classList.add('visible')
            setTimeout(function() {
                alertSubmit.classList.add('invisible')
              }, 5000);
        }else {
            alertSubmit.classList.remove('visible')
            alertSubmit.classList.add('invisible')
        }
        
    })  


}

export default submitForm;