document.getElementById('mostrar-esconder-imagem').addEventListener('click', () => {
    const imagem = document.getElementById('imagem-cs');
    imagem.style.display = imagem.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('mostrar-mensagem').addEventListener('click', () => {
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = mensagem.style.display === 'none' ? 'block' : 'none';
});