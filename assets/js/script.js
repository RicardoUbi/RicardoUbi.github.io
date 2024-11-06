
// Theme 
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applySavedTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("light-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

themeToggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem("selectedTheme", "light")
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem("selectedTheme", "dark"); 
    }
});

document.addEventListener("DOMContentLoaded", applySavedTheme);

// View Page Select
const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll('.redirect-button');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});


// Carregar o JSON de traduções
async function loadTranslations() {
    const response = await fetch('assets/js/translations_.json');
    const translations = await response.json();
    return translations;
}

// Atualizando 'elements' para selecionar múltiplos elementos com o mesmo ID ou classe
const elements = {
    language_select: document.querySelectorAll('#language_select'),
    language_popup: document.querySelectorAll('#language_popup'),
    
    // Atualize os outros elementos também
    redirect_pages_home: document.querySelectorAll('#redirect_pages_home'),
    redirect_pages_portfolio: document.querySelectorAll('#redirect_pages_portfolio'),
    redirect_pages_articles: document.querySelectorAll('#redirect_pages_articles'),
    redirect_pages_about_me: document.querySelectorAll('#redirect_pages_about_me'),

    introduction_greeting: document.querySelectorAll('#introduction_greeting'),
    introduction_description_init: document.querySelectorAll('#introduction_description_init'),
    introduction_description_strong: document.querySelectorAll('#introduction_description_strong'),
    introduction_description_final: document.querySelectorAll('#introduction_description_final'),
    introduction_description_occupation: document.querySelectorAll('#introduction_description_occupation'),
    introduction_description_city: document.querySelectorAll('#introduction_description_city'),
    introduction_connect_button: document.querySelectorAll('#introduction_connect_button'),

    portfolio_head: document.querySelectorAll('#portfolio_head'),
    portfolio_post_one_title: document.querySelectorAll('#portfolio_post_one_title'),
    portfolio_post_one_p: document.querySelectorAll('#portfolio_post_one_p'),
    portfolio_post_two_title: document.querySelectorAll('#portfolio_post_two_title'),
    portfolio_post_two_p: document.querySelectorAll('#portfolio_post_two_p'),
    portfolio_post_three_title: document.querySelectorAll('#portfolio_post_three_title'),
    portfolio_post_three_p: document.querySelectorAll('#portfolio_post_three_p'),
    portfolio_post_view_more: document.querySelectorAll('#portfolio_post_view_more'),

    articles_head: document.querySelectorAll('#articles_head'),
    articles_post_one_title: document.querySelectorAll('#articles_post_one_title'),
    articles_post_one_p: document.querySelectorAll('#articles_post_one_p'),
    articles_post_two_title: document.querySelectorAll('#articles_post_two_title'),
    articles_post_two_p: document.querySelectorAll('#articles_post_two_p'),
    articles_post_view_more: document.querySelectorAll('#articles_post_view_more'),
    articles_post_more_btn: document.querySelectorAll('#articles_post_more_btn'),

    generic_post_view_more_btn: document.querySelectorAll('#generic_post_view_more_btn'),

    contacts_head: document.querySelectorAll('#contacts_head')
};

// Função para aplicar a linguagem
function applyLanguage(language, translations) {
    Object.keys(elements).forEach((elementID) => {
        const translation = translations[elementID]?.[language];
        if (translation) {
            elements[elementID].forEach((element) => {
                element.innerText = translation;
            });
        }
    });
}

document.getElementById('language-toggle').addEventListener('click', () => {
    const popup = document.getElementById('language-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

async function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    const translations = await loadTranslations();
    applyLanguage(language, translations);
    document.getElementById('language-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', async () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    const translations = await loadTranslations();
    applyLanguage(savedLanguage, translations);
});



