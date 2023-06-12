const formZip = document.getElementById('loginForm');

formZip.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Pegar dados do formulario abaixo
    // Selecionar os elementos de input
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    // Pegar os valores dos inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    dadosForm = {"email" : email, "senha" : password}

    rota = "http://localhost:3000/login" // Colocar rota do Login

    axios.post(rota, dadosForm)
    .then((response) => {
        console.log(response.data);
        // Faça algo com a resposta
    })
    .catch((error) => {
        console.error(error);
        // Trate o erro
    });
});
