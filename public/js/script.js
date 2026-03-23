document.addEventListener('DOMContentLoaded', () => {
    const dadosCarrossel = {
        slides: [
            {
                tag: "Iniciativas Nacionais",
                titulo: "O Esporte como <br> <span class='text-blue-400'>Motor de Mudança.</span>",
                descricao: "A ANIEL conecta sonhos ao esporte e ao lazer em cada canto do Brasil.",
                botaoTexto: "Ver Projetos",
                target: "projetos",
                icone: "fa-running"
            },
            {
                tag: "Transparência",
                titulo: "Gestão Ética e <br> <span class='text-blue-400'>Comprometida.</span>",
                descricao: "Acesse nossos relatórios e entenda como aplicamos cada recurso.",
                botaoTexto: "Ver Transparência",
                target: "transparencia",
                icone: "fa-file-invoice-dollar"
            },
            {
                tag: "Junte-se a nós",
                titulo: "Faça parte da <br> <span class='text-blue-400'>Nossa Equipe.</span>",
                descricao: "Estamos em busca de novos talentos para transformar o cenário esportivo.",
                botaoTexto: "Trabalhe Conosco",
                target: "trabalhe",
                icone: "fa-users"
            }
        ]
    };

    const source = document.getElementById("carousel-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(dadosCarrossel);
    document.getElementById("carousel-container").innerHTML = html;

    // --- INICIALIZAÇÃO DO OWL CAROUSEL ---
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 800,
            animateOut: 'fadeOut'
        });
    });

    // --- LÓGICA DE TROCA DE ABAS (Atualizada para funcionar com elementos dinâmicos) ---
    // Usamos delegação de eventos para garantir que os botões criados pelo Handlebars funcionem
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.add('hidden');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Alternar visibilidade do menu mobile
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
        
        // Trocar ícone de barras para fechar (opcional)
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Fechar menu ao clicar em um link (mobile)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            // Pega o ID do alvo (ex: 'sobre', 'projetos')
            const targetId = link.getAttribute('data-target');

            // 1. Esconde todas as seções
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // 2. Mostra apenas a seção desejada
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            // Opcional: Destacar o link ativo no menu
            navLinks.forEach(l => l.classList.remove('text-blue-600', 'font-bold'));
            link.classList.add('text-blue-600', 'font-bold');
        });
    });
});

