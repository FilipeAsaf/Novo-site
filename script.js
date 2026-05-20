// CONFIGURAÇÕES
const WHATSAPP_NUMBER = '5587981534894'; // Altere com seu número
const EMAIL = 'millenavitoria0107@gmail.com'; // Seu email
const WHATSAPP_MESSAGE = 'Olá! Gostaria de solicitar um orçamento para um vídeo.';

// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FORMULÁRIO DE ORÇAMENTO
const form = document.getElementById('orcamentoForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;
    const data = document.getElementById('data').value;
    const cidade = document.getElementById('cidade').value;
    const descricao = document.getElementById('descricao').value;

    // Montar mensagem
    const mensagem = `
*SOLICITAÇÃO DE ORÇAMENTO*

*Nome:* ${nome}
*Email:* ${email}
*Tipo de Evento:* ${tipo}
*Data:* ${data}
*Cidade:* ${cidade}
*Descrição:* ${descricao}
    `.trim();

    // Enviar para WhatsApp
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');

    // Limpar formulário
    form.reset();
});

// ADICIONAR PORTFÓLIO (Função para você usar depois)
// ADICIONAR PORTFÓLIO (Função atualizada com suporte a vídeo)
function adicionarPortfolioItem(imageUrl, titulo, videoUrl = null) {
    const portfolioGrid = document.getElementById('portfolioGrid');

    // Remover placeholder se existir
    const placeholder = portfolioGrid.querySelector('.portfolio-placeholder');
    if (placeholder) {
        placeholder.remove();
    }

    const item = document.createElement('div');
    item.className = 'portfolio-item';

    // Se tiver vídeo, exibe o vídeo dentro do card

if (videoUrl) {
    item.innerHTML = `
        <iframe
            src="${videoUrl}"
            title="${titulo}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
        <div class="portfolio-item-title">${titulo}</div>
    `;
} else {
    item.innerHTML = `
        <img src="${imageUrl}" alt="${titulo}" title="${titulo}">
        <div class="portfolio-item-title">${titulo}</div>
    `;
}

    portfolioGrid.appendChild(item);
}

// Seus projetos
adicionarPortfolioItem('https://i.postimg.cc/d0rpTPhC/portifolio-1.jpg', 'Câmera Profissional');

adicionarPortfolioItem('https://i.postimg.cc/SR66p4xQ/portifolio2.jpg', 'Câmera Profissional 2');

adicionarPortfolioItem(
    'https://drive.google.com/thumbnail?id=1xpJrXdGfods_MPledCYG1rAMNqCzRekA',
    'Dia Das Mães',
    'https://drive.google.com/file/d/1xpJrXdGfods_MPledCYG1rAMNqCzRekA/preview'
);
// adicionarPortfolioItem('https://via.placeholder.com/400', 'Meu Projeto');
// adicionarPortfolioItem('https://via.placeholder.com/400', 'Outro Projeto');

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ANIMAÇÃO AO SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
