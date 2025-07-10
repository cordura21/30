// Add any dynamic behavior here, e.g., banner animations
document.querySelectorAll('.banner').forEach(banner => {
    banner.addEventListener('click', () => {
        console.log(`Clicked ${banner.textContent}`);
        // Add custom behavior if needed
    });
});

document.querySelector('.bg-link').addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});