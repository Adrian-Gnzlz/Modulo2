const closeButton = document.getElementById('CerrarCookie');
const cookieBanner = document.getElementById('CookieContenedor');

closeButton.addEventListener('click', () => {
    cookieBanner.classList.add('invisible'); // Agrega la clase invisible para ocultarlo
    cookieBanner.classList.remove('visible'); // Elimina la clase visible si la tienes
});