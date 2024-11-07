
document.addEventListener("DOMContentLoaded", function() {
    function tampilkanOutput() {
      // Tipe Data String
    let namaPelanggan = "Andi";
    let modelHandphone = "Samsung Galaxy S23 Ultra";
    let warnaHandphone = "Hitam";
    console.log("Tipe Data String:");
    console.log("Nama Pelanggan: " + namaPelanggan); 
    console.log("Model Handphone: " + modelHandphone);
    console.log("Warna Handphone: " + warnaHandphone);

      // Tipe Data Number
      let hargaHandphone = 20000000; // Harga dalam Rupiah
      let diskon = 0.1; // Diskon 10%
      let hargaSetelahDiskon = hargaHandphone - (hargaHandphone * diskon);
    console.log("\nTipe Data Number:");
    console.log("Harga Handphone: " + hargaHandphone);
    console.log("Diskon: " + (diskon * 100) + "%");
    console.log("Harga Setelah Diskon: " + hargaSetelahDiskon);

      // Tipe Data Boolean
      let tersediaStok = true; // Menunjukkan apakah barang tersedia
      let sudahBayar = false; // Menunjukkan apakah pembayaran sudah dilakukan
    console.log("\nTipe Data Boolean:");
    console.log("Apakah handphone tersedia? " + tersediaStok);
    console.log("Apakah pelanggan sudah membayar? " + sudahBayar);

      // Tipe Data Object
        let handphone = {
        model: modelHandphone,
        harga: hargaHandphone,
        warna: warnaHandphone,
        stok: 15, // Jumlah stok yang tersedia
        fitur: ["5G", "Kamera 200MP", "120Hz AMOLED Display"],
        kategori: "Smartphone Flagship",
        cekStok: function() {
        return this.stok > 0 ? "Tersedia" : "Habis";
        }
    };
    console.log("\nTipe Data Object:");
    console.log("Informasi Handphone: ", handphone);
    console.log("Fitur Handphone: " + handphone.fitur.join(", "));
    console.log("Stok Handphone: " + handphone.cekStok());

      // Tipe Data Array
    let handphoneTersedia = [
        { model: "Samsung Galaxy S23 Ultra", harga: 20000000, stok: 5 },
        { model: "iPhone 15 Pro Max", harga: 25000000, stok: 10 },
        { model: "Xiaomi 13 Pro", harga: 18000000, stok: 3 }
    ];
    console.log("\nTipe Data Array:");
    console.log("Daftar Handphone yang Tersedia untuk Dijual:");
    handphoneTersedia.forEach((hp, index) => {
    console.log(`${index + 1}. Model: ${hp.model}, Harga: ${hp.harga}, Stok: ${hp.stok}`);
    });

      // Tipe Data Null
      let customerFeedback = null; // Feedback pelanggan belum diberikan
    console.log("\nTipe Data Null:");
    console.log("Feedback pelanggan: " + customerFeedback); // Feedback masih kosong

      // Tipe Data Undefined
    let nomorResi;
    console.log("\nTipe Data Undefined:");
    console.log("Nomor Resi Pengiriman: " + nomorResi); // Belum didefinisikan

      // Tipe Data Symbol
    let transactionId = Symbol("transaksi123");
    let transactionId2 = Symbol("transaksi123");
    console.log("\nTipe Data Symbol:");
    console.log("ID Transaksi Unik 1: " + transactionId.toString());
    console.log("ID Transaksi Unik 2: " + transactionId2.toString());
    console.log("Apakah kedua ID transaksi sama? " + (transactionId === transactionId2));

      // Kasus Penggunaan Gabungan dalam Proses Penjualan
    let transaksiPenjualan = {
        idTransaksi: transactionId,
        pelanggan: namaPelanggan,
        handphoneTerpilih: handphone.model,
        jumlah: 1,
        totalHarga: hargaSetelahDiskon,
        metodePembayaran: "Transfer Bank",
        statusPembayaran: sudahBayar ? "Lunas" : "Belum Dibayar",
        tanggalPembelian: new Date(),
        simpanTransaksi: function() {
        console.log("\nTransaksi Penjualan Disimpan:");
        console.log("ID Transaksi: " + this.idTransaksi.toString());
        console.log("Pelanggan: " + this.pelanggan);
        console.log("Handphone: " + this.handphoneTerpilih);
        console.log("Jumlah: " + this.jumlah);
        console.log("Total Harga: " + this.totalHarga);
        console.log("Metode Pembayaran: " + this.metodePembayaran);
        console.log("Status Pembayaran: " + this.statusPembayaran);
        console.log("Tanggal Pembelian: " + this.tanggalPembelian.toLocaleString());
        }
    };

    console.log("\nKasus Penggunaan Gabungan:");
    transaksiPenjualan.simpanTransaksi();
    }

    // Menambahkan event listener untuk tombol
    document.getElementById("tampilOutputBtn").addEventListener("click", tampilkanOutput);
});
