document.addEventListener('DOMContentLoaded', function () {
  const cadastroForm = document.getElementById('cadastroForm');
  const mensagemCadastro = document.getElementById('mensagemCadastro');

  cadastroForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
    mensagemCadastro.textContent = 'Sua inscrição foi realizada!';
    mensagemCadastro.style.display = 'block';
  });
});



  
