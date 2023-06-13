const formZip = document.getElementById('uploadForm');

formZip.addEventListener('submit', (event) => {
    event.preventDefault();
    const fileInput = document.querySelector('input[name="zipFile"]');
    const anoInput = document.querySelector('input[name="ano"]');
    const tipoInput = document.querySelector('input[name="tipo"]');
    
    const file = fileInput.files[0]; // Pegar o arquivo zip
    ano = anoInput.value;
    tipo = tipoInput.value;

    const formData = new FormData();
    formData.append('zipFile', file);
    formData.append('ano', ano);
    formData.append('tipo', tipo);

    rota = 'https://backendprojetofinalredes-production.up.railway.app/upload'

    axios.post(rota, formData)
    .then((response) => {
        console.log(response.data);
        // Faça algo com a resposta
    })
    .catch((error) => {
        console.error(error);
        // Trate o erro
    });
});
