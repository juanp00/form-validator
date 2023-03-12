function validateEmail() {
    const emailInput = document.getElementById('input-email');
    const divInputEmail = document.querySelector('.form-container-inputs-email')

    emailInput.addEventListener('input', (event) => {
    const email = event.target.value;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const isValid = regexEmail.test(email);
    
    if (isValid) {
        divInputEmail.classList.remove('input_invalid')
        divInputEmail.classList.add('input_valid')
    } else {
        divInputEmail.classList.remove('input_valid')
        divInputEmail.classList.add('input_invalid')
    }
    });
}

export default validateEmail;