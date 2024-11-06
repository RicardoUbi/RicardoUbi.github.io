// Setup Scroll
function setupScroll(scrollContainer, scrollLeftButton, scrollRightButton, scrollAmount = 420) {
    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Portfolio
const scrollContainer = document.querySelector('.scroll-container');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

// Articles
const scrollArticlesContainer = document.querySelector('.scroll-articles-container');
const scrollArticlesLeft = document.getElementById('scroll-articles-left');
const scrollArticlesRight = document.getElementById('scroll-articles-right');

setupScroll(scrollContainer, scrollLeft, scrollRight);
setupScroll(scrollArticlesContainer, scrollArticlesLeft, scrollArticlesRight);


// Header Image Movement
const image = document.querySelector('.introdution-header-image-info');
const container = document.querySelector('.introdution-container-header-image-info');

container.addEventListener('mousemove', (event) => {
    const { width, height } = container.getBoundingClientRect();
    const mouseX = (event.clientX / width) - 0.4;
    const mouseY = (event.clientY / height) - 0.4;
    
    // Limita o movimento da imagem
    const maxX = width * 0.1;
    const maxY = height * 0.1; 

    // Suavizar o movimento para o efeito 3D
    const translateX = Math.max(-maxX, Math.min(maxX, mouseX * maxX));
    const translateY = Math.max(-maxY, Math.min(maxY, mouseY * maxY));
    
    image.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${mouseX * 8}deg) rotateX(${-mouseY * 30}deg)`;
});

console.log("Iniciando imagem");
const imageElement = document.getElementById("responsive-image");
const imageContainer = document.getElementById("introduction-image-responsive");

function updateImageSrc() {
    if (window.innerWidth <= 720) { // ARRUMAR PX DA TELA
        // Tela menor, como celular
        imageElement.src = "assets/files/index/image-introduction-mobile.png";
        imageContainer.classList.remove("introdution-container-header-image-info");
        imageContainer.classList.add("introdution-container-header-image-info-mobile");
        imageElement.classList.remove("introdution-header-image-info");
        imageElement.classList.add("introdution-header-image-info-mobile");
        console.log("mobile");
    } else {
        // Tela maior, como desktop
        imageElement.src = "assets/files/index/image-introduction.png";
        imageContainer.classList.remove("introdution-container-header-image-info-mobile");
        imageContainer.classList.add("introdution-container-header-image-info");
        imageElement.classList.remove("introdution-header-image-info-mobile");
        imageElement.classList.add("introdution-header-image-info");
        console.log("pc");
    }
}

// Chama a função ao carregar a página e ao redimensionar
window.addEventListener("load", updateImageSrc);
window.addEventListener("resize", updateImageSrc);
