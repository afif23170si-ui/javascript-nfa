// --- Inisialisasi Data Awal ---
// Array untuk menyimpan daftar produk di toko.
// Menggunakan 'let' karena array ini akan dimodifikasi (tambah/hapus produk).
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// ================================================================= //
// --- FUNGSI-FUNGSI MANAJEMEN PRODUK ---
// ================================================================= //

/**
 * Fungsi untuk menampilkan semua produk yang ada di dalam array produkToko.
 * Mencetak daftar produk ke konsol dengan format yang rapi.
 */
function tampilkanProduk() {
    console.log("\n--- Daftar Produk Toko ---");
    if (produkToko.length === 0) {
        console.log("Saat ini tidak ada produk di toko.");
        return; // Keluar dari fungsi jika tidak ada produk
    }

    // Menggunakan forEach untuk iterasi setiap produk dalam array
    produkToko.forEach(produk => {
        // Menggunakan toLocaleString untuk format harga agar lebih mudah dibaca
        const hargaFormatted = produk.harga.toLocaleString('id-ID');
        console.log(`${produk.id}. ${produk.nama} | Harga: Rp${hargaFormatted} | Stok: ${produk.stok}`);
    });
    console.log("--------------------------\n");
}

/**
 * Fungsi untuk menambahkan produk baru ke dalam array produkToko.
 * ID produk baru akan dibuat secara otomatis.
 * @param {string} nama - Nama produk baru.
 * @param {number} harga - Harga produk baru.
 * @param {number} stok - Jumlah stok produk baru.
 */
function tambahProduk(nama, harga, stok) {
    // Menentukan ID untuk produk baru secara otomatis
    // Mencari ID tertinggi yang ada, lalu menambahkannya dengan 1
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;

    // Membuat objek produk baru
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    // Menambahkan objek produk baru ke dalam array produkToko
    produkToko.push(produkBaru);
    console.log(`✅ Produk "${nama}" berhasil ditambahkan dengan ID ${idBaru}.`);
}

/**
 * Fungsi untuk menghapus produk dari array produkToko berdasarkan ID.
 * @param {number} id - ID produk yang akan dihapus.
 */
function hapusProduk(id) {
    // Mencari index dari produk yang memiliki ID yang sesuai
    const indexProduk = produkToko.findIndex(produk => produk.id === id);

    // Jika produk ditemukan (index bukan -1), maka hapus produk tersebut
    if (indexProduk !== -1) {
        const namaProdukYangDihapus = produkToko[indexProduk].nama;
        // Menghapus 1 elemen dari array pada index yang ditemukan
        produkToko.splice(indexProduk, 1);
        console.log(`🗑️ Produk "${namaProdukYangDihapus}" (ID: ${id}) berhasil dihapus.`);
    } else {
        // Jika produk tidak ditemukan
        console.log(`⚠️ Produk dengan ID ${id} tidak ditemukan.`);
    }
}


// ================================================================= //
// --- DEMONSTRASI PENGGUNAAN FUNGSI ---
// ================================================================= //

// 1. Menampilkan daftar produk awal
console.log("====== Memulai Sistem Manajemen Produk ======");
tampilkanProduk();

// 2. Menambahkan produk baru: Monitor
console.log("====== Menambahkan Produk Baru ======");
tambahProduk("Monitor", 1500000, 8);
tampilkanProduk();

// 3. Menambahkan produk baru lagi: Headset
tambahProduk("Headset", 550000, 12);
tampilkanProduk();

// 4. Menghapus produk yang ada (misal: Mouse dengan ID 2)
console.log("====== Menghapus Produk ======");
hapusProduk(2);
tampilkanProduk();

// 5. Mencoba menghapus produk dengan ID yang tidak ada (misal: ID 99)
hapusProduk(99);
tampilkanProduk();

console.log("====== Sistem Selesai Dijalankan ======");