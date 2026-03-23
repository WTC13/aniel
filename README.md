# ANIEL - Associação Nacional de Iniciativas Esportivas e de Lazer

![Status do Projeto](https://img.shields.io/badge/Status-Finalizado-brightgreen)
![Tecnologias](https://img.shields.io/badge/Stack-HTML5%20%7C%20Tailwind%20CSS%20%7C%20JS-blue)

## 📌 Sobre o Projeto
A **ANIEL** é uma plataforma institucional moderna desenvolvida para representar uma associação esportiva de alcance nacional. O site foi construído seguindo o conceito de **SPA (Single Page Application)** simples, onde a navegação entre as seções ocorre de forma instantânea sem o recarregamento da página, proporcionando uma experiência de usuário fluida e profissional.

## 🚀 Funcionalidades Principais
* **Navegação Dinâmica:** Troca de seções via JavaScript (DOM Manipulation).
* **Carrossel de Destaques:** Implementado com `Owl Carousel 2` e renderizado dinamicamente com `Handlebars.js`.
* **Design Responsivo:** Interface adaptável para dispositivos móveis, tablets e desktops utilizando `Tailwind CSS`.
* **Menu Mobile:** Sistema de menu hambúrguer com animações suaves de abertura e fechamento.
* **Portal da Transparência:** Área dedicada para download de relatórios e documentos oficiais.
* **Captação de Talentos:** Seção estruturada para exibição de vagas e banco de currículos.
* **Integração Social:** Links diretos para WhatsApp, Instagram, X (Twitter), TikTok e YouTube.

## 🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as melhores práticas de front-end:

* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Estrutura semântica.
* [Tailwind CSS](https://tailwindcss.com/) - Estilização via utilitários (CDN).
* [JavaScript (Vanilla)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Lógica de navegação e manipulação de estado.
* [Handlebars.js](https://handlebarsjs.com/) - Sistema de templates para renderização de dados dinâmicos.
* [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) - Slider/Carrossel responsivo.
* [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones profissionais.
* [jQuery](https://jquery.com/) - Dependência necessária para o funcionamento do Owl Carousel.

## 📂 Estrutura de Arquivos
```text
/
├── index.html      # Estrutura principal e templates Handlebars
├── style.css       # Estilizações customizadas e animações
├── script.js       # Lógica de navegação, carrossel e menu mobile
└── README.md       # Documentação do projeto (este arquivo)
```

## ⚙️ Como Executar o Projeto

1. Faça o download dos arquivos do projeto.
2. Certifique-se de estar conectado à internet (necessário para carregar as bibliotecas via CDN).
3. Abra o arquivo index.html em qualquer navegador moderno.

## Navegação (SPA)
A troca de seções é controlada pelo atributo data-target presente nos elementos com a classe .nav-link. O script.js intercepta o clique, oculta todas as seções com a classe .content-section e exibe apenas a seção cujo id corresponde ao data-target.

## Carrossel Dinâmico
Os dados do carrossel estão centralizados no objeto dadosCarrossel dentro do script.js. Para adicionar ou remover slides, basta alterar este objeto:

```
const dadosCarrossel = {
    slides: [
        { tag: "Nova Tag", titulo: "Novo Título", ... }
    ]
};
```

##Menu Mobile
O menu mobile utiliza uma lógica de toggle de classes CSS. A animação de "slide down" é controlada pela propriedade max-height no style.css para garantir performance.

##📝 Licença
Este projeto foi desenvolvido para fins institucionais. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme a necessidade da associação.

Desenvolvido com ❤️ por **WTC**


