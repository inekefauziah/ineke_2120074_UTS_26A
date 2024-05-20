document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Mendapatkan nilai dari input
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Menjumlahkan dua bilangan
    const sum = num1 + num2;

    // Menampilkan hasil
    document.getElementById('result').innerText = 'Hasil: ' + sum;
});
