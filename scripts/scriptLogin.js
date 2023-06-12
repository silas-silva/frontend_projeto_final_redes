const formZip = document.getElementById('loginForm');

formZip.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Pegar dados do formulario abaixo
    dadosForm = {}
    rota = "http://localhost:3000/upload" // Colocar rota do Login

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
