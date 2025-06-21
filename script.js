const form = document.getElementById('matriculaForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;

    if (!nome || !email || !curso) {
        alert("Por favor, preencha todos os dados.");
        return;
    }

    // Simulação do processamento
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = `
        <strong>Processando...</strong><br>
        Validando pagamento e documentação...<br><br>
    `;

    setTimeout(() => {
        statusDiv.innerHTML += `
            ✔️ Dados validados.<br>
            ✔️ Contrato gerado.<br>
            ✔️ Matrícula realizada com sucesso.<br><br>
            Bem-vindo(a) à PUCPR, ${nome}!
        `;
    }, 2000);
});
