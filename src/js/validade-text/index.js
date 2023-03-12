function validateText() {
    const divInputName = document.querySelector('.form-container-inputs-name')
    
        
        const meuInput = document.getElementById('input-text-name');

        meuInput.addEventListener('keydown', (event) => {
        const isCaractere = /[a-zA-ZÀ-ú ]/.test(event.key);
        if (!isCaractere) {
            divInputName.classList.add('input_invalid')
            event.preventDefault();
        }else{
            divInputName.classList.remove('input_invalid')
            divInputName.classList.add('input_valid')
        }
        
    });
}

export default validateText;