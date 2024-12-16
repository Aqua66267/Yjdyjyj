document.getElementById("changeColorBtn").addEventListener("click", function() {
    // Mengganti warna latar belakang secara acak
    const colors = ["#f4f4f4", "#ffcccb", "#d3f4f1", "#ffeb3b", "#ff5722"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert(`Terima kasih, ${name}. Kami telah menerima formulir Anda!`);
    } else {
        alert("Harap isi semua field.");
    }
});
