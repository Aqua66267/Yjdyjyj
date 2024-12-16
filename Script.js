// Menangani event klik pada tombol untuk merubah teks
document.getElementById('changeTextButton').addEventListener('click', function() {
    const heading = document.querySelector('header h1');
    heading.textContent = "Teks telah diubah setelah klik!";
});

// Menangani pengiriman form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    alert('Form telah dikirim. Terima kasih!');
});
