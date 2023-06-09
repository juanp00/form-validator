function submitForm() {
    const form = document.querySelector('.container-form-element')
    const alertSucess = document.getElementById('alert-success')
    const nome = document.querySelector('.form-container-inputs-name').classList
    const cpf = document.querySelector('.form-container-inputs-cpf').classList
    const rg = document.querySelector('.form-container-inputs-rg').classList
    const email = document.querySelector('.form-container-inputs-email').classList
    const person = document.querySelector('.form-input-person').classList
    const alertSubmit = document.getElementById('alertSubmit')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if(nome[1] === "input_invalid" || cpf[1] === "input_invalid" || rg[1] === "input_invalid" || email[1] === "input_invalid" || person[1] === "input_invalid")   {
            alertSubmit.style.height = 'auto'
            alertSubmit.classList.remove('invisible')
            alertSubmit.classList.add('visible')
            setTimeout(function() {
                alertSubmit.classList.add('invisible')
                alertSubmit.style.height = '0'
              }, 5000);
        }else {
            alertSucess.style.height = 'auto'
            alertSucess.classList.remove('invisible')
            alertSucess.classList.add('visible')
            alertSubmit.classList.add('invisible')
            form.reset()
        }
        
    })  


}

export default submitForm;