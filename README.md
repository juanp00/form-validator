<h1>Validador de Formulário</h1>
Este projeto tem como objetivo validar os campos de um formulário, permitindo apenas valores válidos e criando máscaras para CPF e RG. Os campos validados são:

- Nome: permite apenas texto;
- CPF: permite apenas números, que tenha apenas 11 dígitos e cria uma máscara 111.111.111-11;
- RG: permite apenas números, que tenha apenas 9 dígitos e cria uma máscara 11.111.111-1;
- E-mail: verifica se há pelo menos 2 caracteres antes do @, se há um @, pelo menos 2 carateres depois do @, que tenha um . e no mínimo dois caracteres depois do ponto. Sendo assim: example@gmail.com.

<h3>Classes para campos válidos e inválidos</h3>
Enquanto os campos não estiverem cumprindo os requisitos, é adicionada uma classe "input_invalid". Quando o campo é preenchido corretamente, é adicionada uma classe "input_valid".

Para a classe <strong>"input_invalid" </strong>, é adicionada uma borda vermelha na div do input e para a classe "input_valid", é adicionada uma borda verde.

<h3>Validação no Submit</h3>
Ao clicar no botão de submit, é verificado se alguma das divs dos inputs possui uma classe "input_invalid". Caso possua, é exibida uma mensagem abaixo do botão informando que existem campos que devem ser preenchidos corretamente.

Caso todos os campos estejam preenchidos corretamente, é exibida uma mensagem de cadastro realizado abaixo do botão.

<h3>Como utilizar</h3>
Para utilizar o validador de formulário, basta baixar os arquivos e abrir o arquivo index.html em um navegador. Em seguida, preencha os campos com informações válidas e clique no botão de submit.

Esperamos que este validador de formulário seja útil para validar seus formulários e garantir que as informações inseridas estejam corretas. Sugestões são sempre bem-vindas.
