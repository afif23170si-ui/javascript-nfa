// app.mjs

// Mengimpor fungsi-fungsi dari controller.
import { index, store, destroy } from "./controller.mjs";

// Fungsi utama untuk menjalankan aplikasi.
const main = () => {
    console.log("Menjalankan aplikasi manajemen data...");
    
    // 1. Menampilkan data awal
    console.log("\n# Data Awal:");
    index();

    // 2. Menambahkan dua data baru
    const newUser1 = { nama: 'Kartika Sari', umur: 29, alamat: 'Jl. Kebangkitan 11', email: 'kartika@example.com' };
    const newUser2 = { nama: 'Luhut Pandjaitan', umur: 30, alamat: 'Jl. Persatuan 12', email: 'luhut@example.com' };
    
    store(newUser1);
    store(newUser2);

    // 3. Menampilkan data setelah penambahan
    console.log("\n# Data Setelah Penambahan:");
    index();

    // 4. Menghapus satu data (data terakhir)
    destroy();

    // 5. Menampilkan data akhir
    console.log("\n# Data Akhir Setelah Penghapusan:");
    index();
};

// Menjalankan fungsi utama.
main();