// Selecciona el botón
const trackButton = document.getElementById('trackButton');

// Agrega un listener para rastrear clics
trackButton.addEventListener('click', () => {
    gtag('event', 'button_click', {
        'event_category': 'User Interaction',
        'event_label': 'Track Event Button',
    });
    console.log("Event tracked: Button Click");
});
