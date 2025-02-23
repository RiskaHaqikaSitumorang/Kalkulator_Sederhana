const readline = require('readline');
const math = require('./solution');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Selamat datang di Kalkulator Sederhana");
console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("5. Pangkat");
console.log("6. Faktorial");
console.log("7. Cek Bilangan Prima");
console.log("8. Modulus");
console.log("9. Nilai Absolut");
console.log("10. Nilai Maksimum");
console.log("11. Nilai Minimum");
console.log("12. Pembulatan");

rl.question("Masukkan pilihan (1-12): ", function (pilihan) {
    // Periksa apakah input hanya angka (tanpa koma atau karakter lain)
    if (!/^\d+$/.test(pilihan)) {
        console.log("Pilihan tidak valid!");
        rl.close();
        return;
    }

    pilihan = parseInt(pilihan);

    if (pilihan >= 1 && pilihan <= 5 || pilihan === 8 || pilihan === 10 || pilihan === 11) {
        rl.question("Masukkan angka pertama: ", function (a) {
            rl.question("Masukkan angka kedua: ", function (b) {
                a = parseFloat(a);
                b = parseFloat(b);
                let hasil;
                switch (pilihan) {
                    case 1: hasil = math.tambah(a, b); break;
                    case 2: hasil = math.kurang(a, b); break;
                    case 3: hasil = math.kali(a, b); break;
                    case 4: hasil = math.bagi(a, b); break;
                    case 5: hasil = math.pangkat(a, b); break;
                    case 8: hasil = math.modulus(a, b); break;
                    case 10: hasil = math.maksimum(a, b); break;
                    case 11: hasil = math.minimum(a, b); break;
                }
                console.log("Hasil: ", hasil);
                rl.close();
            });
        });
    } else if (pilihan === 6 || pilihan === 7 || pilihan === 9 || pilihan === 12) {
        rl.question("Masukkan angka: ", function (n) {
            n = parseFloat(n);
            let hasil;
            switch (pilihan) {
                case 6: hasil = math.faktorial(n); break;
                case 7: hasil = math.isPrima(n); break;
                case 9: hasil = math.absolut(n); break;
                case 12: hasil = Math.round(n); break;
            }
            console.log("Hasil: ", hasil);
            rl.close();
        });
    } else {
        console.log("Pilihan tidak valid!");
        rl.close();
    }
});
