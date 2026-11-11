export default function LuasKelilingPersegi() {
  const panjang: number = 8;
  const lebar: number = 4;

  const luas: number = panjang * lebar;
  const keliling: number = 2 * (panjang + lebar);

  const hasil: string = `Persegi panjang dengan panjang sisi ${panjang} dan ${lebar} memiliki luas ${luas} dan keliling ${keliling}.`;
  
  console.log(hasil);

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Tugas 1a: Luas dan Keliling Persegi Panjang</h1>
      <p>{hasil}</p>
    </main>
  );
}