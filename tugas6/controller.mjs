// controller.mjs

// Mengimpor data pengguna dari file data.mjs.
import users from "./data.mjs";

// Fungsi untuk menampilkan semua data menggunakan .map().
const index = () => {
    console.log("--- Menampilkan Semua Data Pengguna ---");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
    console.log("---------------------------------------");
};

// Fungsi untuk menambahkan data baru ke dalam array.
const store = (user) => {
    users.push(user);
    console.log(`\nData untuk "${user.nama}" berhasil ditambahkan!`);
};

// Fungsi untuk menghapus data terakhir dari array.
const destroy = () => {
    const deletedUser = users.pop(); // Menghapus elemen terakhir
    console.log(`\nData terakhir ("${deletedUser.nama}") berhasil dihapus!`);
};

// Mengekspor semua fungsi menggunakan named export.
export { index, store, destroy };