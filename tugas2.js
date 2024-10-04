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
        return { hasil: angkaPertama / angkaKedua, angkaKedua };
      case "%":
        return angkaPertama % angkaKedua;
      default:
        return null;
    }
  };

  const hitungAkar = (angka) => {
    return Math.sqrt(angka);
  };

  const hitungSin = (angka) => {
    return Math.sin(angka);
  };

  const hitungCos = (angka) => {
    return Math.cos(angka);
  };

  const hitungTan = (angka) => {
    return Math.tan(angka);
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
    let menuUtama = readline.question(
      "Pilih Menu Utama:\n1. Kalkulator\n2. Melihat Riwayat\n3. Exit\n"
    );

    if (menuUtama === "2") {
      tampilkanRiwayat();
      continue;
    } else if (menuUtama === "3") {
      const confirmExit = readline.question("Apakah Anda yakin ingin keluar? (y/n): ");
      if (confirmExit.toLowerCase() === "y") {
        console.log("Terima kasih!");
        break;
      } else {
        continue;
      }
    } else {
      while (true) {
        let subMenu = readline.question(
          "Pilih Sub Menu:\n1. Pertambahan\n2. Pengurangan\n3. Perkalian\n4. Pembagian\n5. Modulus\n6. Akar\n7. Sin\n8. Cos\n9. Tan\n"
        );

        let angkaPertama;
        let operator;
        let angkaKedua;

        switch (subMenu) {
          case "1":
            angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
            angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));
            operator = "+";
            break;
          case "2":
            angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
            angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));
            operator = "-";
            break;
          case "3":
            angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
            angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));
            operator = "*";
            break;
          case "4":
            angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
            angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));
            operator = "/";
            break;
          case "5":
            angkaPertama = parseFloat(readline.question("Masukkan angka pertama: "));
            angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));
            operator = "%";
            break;
          case "6":
            angkaPertama = parseFloat(readline.question("Masukkan angka: "));
            console.log(`Hasil akar dari ${angkaPertama} adalah ${hitungAkar(angkaPertama)}`);
            riwayat.push(`Akar dari ${angkaPertama} = ${hitungAkar(angkaPertama)}`);
            break;
          case "7":
            angkaPertama = parseFloat(readline.question("Masukkan angka: "));
            console.log(`Hasil sin dari ${angkaPertama} adalah ${hitungSin(angkaPertama)}`);
            riwayat.push(`Sin dari ${angkaPertama} = ${hitungSin(angkaPertama)}`);
            break;
          case "8":
            angkaPertama = parseFloat(readline.question("Masukkan angka: "));
            console.log(`Hasil cos dari ${angkaPertama} adalah ${hitungCos(angkaPertama)}`);
            riwayat.push(`Cos dari ${angkaPertama} = ${hitungCos(angkaPertama)}`);
            break;
          case "9":
            angkaPertama = parseFloat(readline.question("Masukkan angka: "));
            console.log(`Hasil tan dari ${angkaPertama} adalah ${hitungTan(angkaPertama)}`);
            riwayat.push(`Tan dari ${angkaPertama} = ${hitungTan(angkaPertama)}`);
            break;
          default:
            console.log("Sub menu tidak valid!");
            continue;
        }

        if (subMenu !== "6" && subMenu !== "7" && subMenu !== "8" && subMenu !== "9") {
          const result = hitung(angkaPertama, operator, angkaKedua);
          if (typeof result === "object") {
            angkaKedua = result.angkaKedua;
            console.log(
              `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} adalah ${result.hasil}`
            );
            hasilSebelumnya = result.hasil; // Simpan hasil untuk kalkulasi selanjutnya
            riwayat.push(
              `${angkaPertama} ${operator} ${angkaKedua} = ${result.hasil}`
            ); // Simpan ke riwayat
          } else if (result !== null) {
            console.log(
              `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} adalah ${result}`
            );
            hasilSebelumnya = result; // Simpan hasil untuk kalkulasi selanjutnya
            riwayat.push(`${angkaPertama} ${operator} ${angkaKedua} = ${result}`); // Simpan ke riwayat
          }
        }

        const lagi = readline.question("Ingin melakukan operasi lagi? (y/n): ");
        if (lagi.toLowerCase() === "n") {
          break;
        }
      }
    }
  }
};

kalkulator();
