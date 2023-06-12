const formZip = document.getElementById('buscaForm');

formZip.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Pegar dados do formulario abaixo
    // Selecionar os elementos de input
    const buscaInput = document.querySelector('input[name="busca"]');
    const dataInicioInput = document.querySelector('input[name="dataInicio"]');
    const dataFimInput = document.querySelector('input[name="dataFim"]');

    // Pegar os valores dos inputs
    const busca = buscaInput.value;
    const dataInicio = dataInicioInput.value;
    const dataFim = dataFimInput.value;
    dadosForm = {"palavrasChave" : busca, "dataInicio" : dataInicio, "dataFim" : dataFim}

    rota = "http://localhost:3000/buscar" // Colocar rota da Busca

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
