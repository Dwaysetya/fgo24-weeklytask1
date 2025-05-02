const totalBelanja = 1200000;
let totalAkhir = totalBelanja;

if (totalBelanja >= 1000000) {
  totalAkhir = totalBelanja - totalBelanja * 0.1;
  console.log(
    "Anda mendapatkan diskon 10%, total belanja Anda menjadi Rp: " +
      totalAkhir.toLocaleString("id-ID")
  );
} else if (totalBelanja >= 500000) {
  totalAkhir = totalBelanja - totalBelanja * 0.05;
  console.log(
    "Anda mendapatkan diskon 5%, total belanja Anda menjadi Rp: " +
      totalAkhir.toLocaleString("id-ID")
  );
} else {
  console.log(
    "Anda tidak mendapatkan diskon, total belanja Anda Rp: " +
      totalBelanja.toLocaleString("id-ID")
  );
}
