const Pertemuan5 = () => {
  // Algoritma percabangan
  const a = 4;
  if (a > 5) {
    console.log("a lebih besar dari 5");
  } else if (a >= 0 && a <= 5) {
    console.log("a berada di antara 0 dan 5");
  } else {
    console.log("a kurang dari 0");
  }

  // Algoritma perulangan
  for (let z = 3; z <= 10; z = z + 1) {
    console.log("Perulangan Z ke-" + z);
  }

  let x = 0;

  while (x <= 10) {
    console.log("Perulangan X ke-" + x);
    x = x + 1; // artinya sama dengan x++;
  }

  // let vs const
  const nama = "Muhammad Fadhlan"; // wajib diinisialisasi
  // nama = "Yusuf"; // ini akan error karena const tidak bisa diubah
  // const umur; // ini akan error karena const wajib diinisialisasi

  let alamat; // boleh tidak diinisialisasi
  alamat = "Jl. Raya Bogor";
  alamat = "Jl. Raya Jakarta"; // ini diperbolehkan karena let bisa diubah

  /**
   * Membantu untuk menulis kode yang lebih aman dan terstruktur,
   * karena kita bisa menentukan tipe data dari sebuah variabel.
   * Dengan begitu, kita bisa menghindari kesalahan dalam penulisan kode.
   */
  let nik: string; // ini adalah tipe data string

  nik = 12345;
  nik = "12345";

  let nim;
  nim = "123456";
  nim = 123456;

  // tipe data boolean
  let lulus: boolean;
  lulus = true;
  lulus = false;
  lulus = "true"; // ini akan error karena tipe data boolean hanya bisa true atau false
  lulus = 0;

  console.log(typeof lulus); // ini akan menampilkan tipe data dari lulus

  // Template literals
  const teks1 = "Ini adalah string";
  console.log(teks1);

  const teks2 = `Ini adalah string`;
  console.log(teks2);

  const b = 10; //number
  const c = 15; //number
  const teks = `Template Literal: Penjumlahan ${b} + ${c} = ${b + c}`; //template string/template literal
  console.log(teks);
  console.log("String Biasa: Penjumlahan " + b + " + " + c + " = " + (b + c)); //string biasa

  // Logika Boolean
  const x1: boolean = true;
  const x2: boolean = false;

  console.log(`x1 AND x2 = ${x1 && x2}`); // false
  console.log(`x1 OR x2 = ${x1 || x2}`); // true
  console.log(`NOT x1 = ${!x1}`); // false

  // Ternary Operator
  const nilai: number = 70;
  const namaSiswa: string = "Yusuf";

  // dengan ternary operator
  const hasilTes: string =
    nilai >= 60 ? `${namaSiswa} lulus` : `${namaSiswa} tidak lulus`;

  // tanpa ternary operator
  if (nilai >= 60) {
    console.log(`${namaSiswa} lulus`);
  } else {
    console.log(`${namaSiswa} tidak lulus`);
  }
  console.log(hasilTes);

  return <div>Pertemuan 5</div>;
};

export default Pertemuan5;