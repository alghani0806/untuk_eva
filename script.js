// Array berisi kata-kata bucin yang akan dipilih secara acak
const kataBucin = [
    "Kamu adalah alasan aku tersenyum setiap hari 😘",
    "Cinta ini seperti ombak yang tak pernah berhenti mengalir 💖",
    "Aku akan selalu ada buat kamu, sampai kapanpun 💕",
    "Kamu membuat hidupku lebih indah dari mimpi terindah 🌸",
    "Aku sayang kamu, lebih dari kata-kata yang bisa diucapkan 💞"
];

// Fungsi yang akan dipanggil saat tombol diklik
function ubahKata() {
    // Menghasilkan indeks acak dari array kataBucin
    const randomIndex = Math.floor(Math.random() * kataBucin.length);
    // Mengubah teks elemen dengan id 'kataBucin' sesuai kata yang terpilih
    document.getElementById('kataBucin').innerText = kataBucin[randomIndex];
}