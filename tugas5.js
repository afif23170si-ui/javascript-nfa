/**
 * Tugas 5 - Manajemen Produk
 * Menggunakan Destructuring, Spread Operator, dan Array Method.
 */

// **Data Produk**
// List data produk awal minimal 5
let productList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Keyboard Mechanical", harga: 800000 },
    { id: 5, nama: "Mouse Wireless", harga: 350000 },
];

// nama fungsi bebas
const eventHandler = {
    tambah: tambahProduk,
    hapus: hapusProduk,
    tampilkan: tampilkanProduk,
};

/**
 * **Menambahkan Produk dengan Spread Operator**
 * Fungsi ini membuat array baru dengan menyalin semua item lama 
 * dan menambahkan item baru di akhir.
 */
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    productList = [...productList, produkBaru];
    console.log(`\nProduk "${nama}" berhasil ditambahkan!`);
}

/**
 * **Menghapus Produk dengan Rest Parameter**
 * Metode .filter() digunakan untuk membuat array baru yang berisi semua elemen 
 * kecuali yang id-nya cocok untuk dihapus.
 */
function hapusProduk(id) {
    const produkDihapus = productList.find(produk => produk.id === id);
    if (produkDihapus) {
        productList = productList.filter(produk => produk.id !== id);
        console.log(`\nProduk dengan ID ${id} ("${produkDihapus.nama}") berhasil dihapus!`);
    } else {
        console.log(`\nProduk dengan ID ${id} tidak ditemukan.`);
    }
}

/**
 * **Menampilkan Produk dengan Destructuring**
 * Menggunakan destructuring ({ id, nama, harga }) untuk mengekstrak properti 
 * dari setiap objek produk saat looping.
 */
function tampilkanProduk() {
    console.log("\n--- Daftar Produk Saat Ini ---");
    if (productList.length === 0) {
        console.log("Tidak ada produk untuk ditampilkan.");
        return;
    }
    for (const produk of productList) {
        const { id, nama, harga } = produk; // Destructuring
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString('id-ID')}`);
    }
    console.log("----------------------------");
}


// --- CONTOH PENGGUNAAN ---

// 1. Menampilkan semua produk awal
tampilkanProduk();

// 2. contoh penambahan data
tambahProduk(6, "Tablet", 7000000);

// 3. Menampilkan daftar produk setelah penambahan
tampilkanProduk();

// 4. Menghapus produk dengan ID 2
hapusProduk(2);

// 5. Menampilkan daftar produk terakhir
tampilkanProduk();