const readline = require("readline-sync");

const kalkulator = () => {
  let hasilSebelumnya = null; // Menyimpan hasil kalkulasi sebelumnya
  let riwayat = []; // Menyimpan riwayat kalkulasi

  const hitung = (angkaPertama, operator, angkaKedua) => {
    switch (operator) {
      case "+":
        return angkaPertama + angkaKedua;
      case "-":
        return angkaPertama - angkaKedua;
      case "*":
        return angkaPertama * angkaKedua;
      case "/":
        // Tangani kasus pembagian dengan nol
        while (angkaKedua === 0) {
          console.log("Error: Tidak bisa membagi dengan nol!");
          angkaKedua = parseFloat(
            readline.question("Masukkan angka kedua yang bukan nol: ")
          );
        }
        return angkaPertama / angkaKedua;
      case "%":
        return angkaPertama % angkaKedua;
      default:
        return null;
    }
  };

  const tampilkanRiwayat = () => {
    console.log("\n--- Riwayat Kalkulasi ---");
    if (riwayat.length === 0) {
      console.log("Belum ada riwayat kalkulasi.");
    } else {
      riwayat.forEach((entry, index) => {
        console.log(`${index + 1}. ${entry}`);
      });
    }
    console.log("\n");
  };

  while (true) {
    let angkaPertama;

    // Menawarkan pilihan apakah ingin menggunakan hasil sebelumnya
    if (hasilSebelumnya !== null) {
      const gunakanHasilSebelumnya = readline.question(
        "Gunakan hasil sebelumnya? (y/n): "
      );
      if (gunakanHasilSebelumnya.toLowerCase() === "y") {
        angkaPertama = hasilSebelumnya;
      } else {
        angkaPertama = parseFloat(
          readline.question("Masukkan angka pertama: ")
        );
      }
    } else {
      angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
    }

    const operator = readline.question("Masukkan operator (+, -, *, /, %): ");
    let angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));

    const requiredOperator = ["+", "-", "*", "/", "%"];

    // Cek apakah operator valid
    if (!requiredOperator.includes(operator)) {
      console.log("Operator tidak valid! Silakan coba lagi.");
    } else if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
      console.log("Input harus berupa angka!");
    } else {
      const result = hitung(angkaPertama, operator, angkaKedua);
      if (result !== null) {
        console.log(
          `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} adalah ${result}`
        );
        hasilSebelumnya = result; // Simpan hasil untuk kalkulasi selanjutnya
        riwayat.push(`${angkaPertama} ${operator} ${angkaKedua} = ${result}`); // Simpan ke riwayat
      }
    }

    const input = readline.question("Ingin menghitung lagi? (y/n/riwayat): ");

    if (input.toLowerCase() === "n") {
      break;
    } else if (input.toLowerCase() === "riwayat") {
      tampilkanRiwayat();
    }
  }
};

kalkulator();
