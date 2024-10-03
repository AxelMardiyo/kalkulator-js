const readline = require("readline-sync");

const kalkulator = () => {
  while (true) {
    const angkaPertama = parseFloat(
      readline.question("Masukkan angka pertama: ")
    );
    const operator = readline.question("Masukkan operator: ");
    const angkaKedua = parseFloat(readline.question("Masukkan angka kedua: "));

    const requiredOperator = ["+", "-", "*", "/", "%"];

    if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
      console.log("Input harus berupa angka!");
    } else if (!requiredOperator.includes(operator)) {
      console.log("Operator tidak valid!");
    } else {
      const result = eval(`${angkaPertama} ${operator} ${angkaKedua}`);
      console.log(
        `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} adalah ${result}`
      );
    }

    const input = readline.question("Ingin menghitung lagi? (y/n) ");

    if (input.toLowerCase() === "n") {
      break;
    }

    function hitung(angkaPertama, operator, angkaKedua) {
      return eval(`${angkaPertama} ${operator} ${angkaKedua}`);
    }
  }
};

kalkulator();
