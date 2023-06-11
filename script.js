const form = document.getElementById('uploadForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fileInput = document.querySelector('input[name="zipFile"]');
    const file = fileInput.files[0]; // Pegar o arquivo zip
    
    const formData = new FormData();
    formData.append('zipFile', file);

    axios.post('http://localhost:3000/upload', formData)
    .then((response) => {
        console.log(response.data);
        // Faça algo com a resposta
    })
    .catch((error) => {
        console.error(error);
        // Trate o erro
    });
});
