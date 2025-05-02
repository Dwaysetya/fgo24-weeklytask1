const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cart = [];
let total = 0;

function menuUtama() {
  console.log(`\n=== MENU UTAMA ===

      1. pilih kategori
      2. Lihat Keranjang
      3. Checkout

  `);

  rl.question("Masukkan pilihan: ", (pilihan) => {
    switch (pilihan) {
      case "1":
        pilihKategori();
        break;
      case "2":
        lihatKeranjang();
        break;
      case "3":
        checkout();
        break;
      default:
        console.log("❌ Pilihan tidak valid.");
        menuUtama();
    }
  });
}
function pilihKategori() {
  console.log(`\n=== PILIH MENU ===
  
     1. Makanan
     2. Minuman
     3. Snack
  
     0. Kembali kemenu utama
  
  `);

  rl.question("Masukkan pilihan: ", (pilihan) => {
    switch (pilihan) {
      case "1":
        menuMakanan();
        break;
      case "2":
        menuMinuman();
        break;
      case "3":
        menuSnack();
        break;
      default:
        console.log("❌ Pilihan tidak valid.");
        menuUtama();
    }
  });
}
function menuMakanan() {
  console.log(`"\n======= PILIH MAKANAN ======="

      "1. Nasi Goreng     - Rp. 15.000
      "2. Mie Goreng      - Rp. 14.000
      "3. Kwetiau         - Rp. 12.000
      "4. Nasi lemak      - Rp. 10.000

      "0. kembali ke kategori"
 
  `);

  rl.question("Masukkan pilihan: ", (item) => {
    if (item === "1") konfirmasiItem("Nasi Goreng", 15000);
    else if (item === "2") konfirmasiItem("Mie Goreng", 14000);
    else if (item === "3") konfirmasiItem("Kwetiau", 12000);
    else if (item === "4") konfirmasiItem("Nasi Lemak", 10000);
    else if (item === "0") pilihKategori();
    else {
      console.log("Pilihan tidak valid.");
      menuMakanan();
    }
  });
}
function menuMinuman() {
  console.log(`\n=== PILIH MINUMAN ===
       
      1. Es Teh            - Rp. 5.000
      2. Es Jeruk          - Rp. 6.000
      3. Teh Tarik         - Rp. 8.000
      4. Aqua              - Rp. 4.000
      5. Americano         - Rp. 12.000
      6. Cafe Latte        - Rp. 19.000
      7. Caramel Machiato  - Rp. 18.000
      8. Vietnam Drip      - Rp. 11.000
  
      0. kembali ke kategori
       `);

  rl.question(" Anda ingin minum apa? ", (item) => {
    if (item === "1") konfirmasiItem("Es Teh", 5000);
    else if (item === "2") konfirmasiItem("Es Jeruk", 6000);
    else if (item === "3") konfirmasiItem("Teh Tarik", 8000);
    else if (item === "4") konfirmasiItem("Aqua", 4000);
    else if (item === "5") konfirmasiItem("Americano", 12000);
    else if (item === "6") konfirmasiItem("Cafe Latte", 19000);
    else if (item === "7") konfirmasiItem("Caramel Machiato", 18000);
    else if (item === "8") konfirmasiItem("Vietnam Drip", 11000);
    else if (item === "0") pilihKategori();
    else {
      console.log("❌ Pilihan tidak valid");
      menuMinuman();
    }
  });
}

function menuSnack() {
  console.log(`\n======= PILIH SNACK =======
       
      1. Fried French  - Rp. 8.000
      2. Onion Ring    - Rp. 9.000
      3. Mix Platter   - Rp. 15.000
      4. Dimsum        - Rp. 12.000
      5. Cireng        - Rp. 7.000
    
      0. kembali ke kategori
      `);

  rl.question("Anda ingin cemilan apa?", (item) => {
    if (item === "1") konfirmasiItem("Fried French", 8000);
    else if (item === "2") konfirmasiItem("Onion ring", 9000);
    else if (item === "3") konfirmasiItem("Mix Platter", 15000);
    else if (item === "4") konfirmasiItem("Dimsum", 12000);
    else if (item === "5") konfirmasiItem("Cireng", 7000);
    else if (item === "0") pilihKategori();
    else {
      console.log("❌ Pilihan Tidak Valid");
      menuSnack();
    }
  });
}

function konfirmasiItem(nama, harga) {
  console.log(`\n=== MENU ANDA ===
       
  Apakah anda yakin? memilih, ${nama} dengan harga Rp.${harga}
      1. Ya
      2. Tidak
       
`);
  rl.question(`Masukan pilihan:`, (jawaban) => {
    if (jawaban === "Ya" || jawaban === "ya") {
      cart += `- ${nama}: Rp ${harga}\n`;
      total += harga;
      console.log(cart);
      console.log(`${nama} ✅ telah ditambahkan ke keranjang.`);
      menuUtama();
    } else if (jawaban === "Tidak" || jawaban === "tidak") {
      console.log("❎ Pembatalan Berhasil");
      menuUtama();
    } else {
      console.log("❌ Pilihan tidak tersedia");
      konfirmasiItem(nama, harga);
    }
  });
}

function lihatKeranjang() {
  console.log(`\n=========  KERANJANG ANDA ========= 
   
  ${cart}
  \n=================================== 
  1. Checkout 
  2. Kembali
   
   `);
  rl.question(`Anda ingin checkout/ kembali ? `, (jawaban) => {
    if (jawaban === "1") {
      checkout();
    } else {
      menuUtama();
    }
  });
}

function checkout() {
  console.log(`\n========= CHECKOUT ========= 

  `);
  if (cart === "") {
    console.log("Belanjaan anda kosong");
    return menuUtama();
  } else {
    console.log(cart);
    console.log(`Total belanja anda Rp. ${total}
    
    
    Terimakasih Sudah Berbelanja
    
    `);
    rl.close;
  }
}

menuUtama();
