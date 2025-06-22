// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
        resultOne += numbers[i]
    }
}
console.log(resultOne, "<=== RESULT SOAL PERTAMA"); //result = 20

// ITERASI 1:
// i = 0
// numbers[0] = 1
// Cek: 1 % 2 = 1 (GANJIL)
// Kondisi if tidak terpenuhi → skip
// resultOne tetap = 0

// ITERASI 2:
// i = 1
// numbers[1] = 2
// Cek: 2 % 2 = 0 (GENAP) ✓
// Kondisi if terpenuhi → resultOne = 0 + 2 = 2
// resultOne sekarang = 2

// ITERASI 3:
// i = 2
// numbers[2] = 3
// Cek: 3 % 2 = 1 (GANJIL)
// Kondisi if tidak terpenuhi → skip
// resultOne tetap = 2

// ITERASI 4:
// i = 3
// numbers[3] = 4
// Cek: 4 % 2 = 0 (GENAP) ✓
// Kondisi if terpenuhi → resultOne = 2 + 4 = 6
// resultOne sekarang = 6

// ITERASI 5:
// i = 4
// numbers[4] = 5
// Cek: 5 % 2 = 1 (GANJIL)
// Kondisi if tidak terpenuhi → skip
// resultOne tetap = 6


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0
for (let i = 0; i < numbersTwo.length; i++) {
    if(numbers[i] % 2 !== 0){
        resultTwo += numbers[i]
    }
}
console.log(resultTwo, "<=== RESULT SOAL KEDUA"); // result 16

// ITERASI 1:
// i = 0
// numbers[0] = 1
// Cek: 1 % 2 = 1 (GANJIL)
// Kondisi if terpenuhi → resultTwo = 0 + 1 = 1
// resultTwo sekarang = 1

// ITERASI 2:
// i = 1
// numbers[1] = 2
// Cek: 2 % 2 = 0 (GENAP) ✓
// Kondisi if tidak terpenuhi → skip
// resultTwo tetap = 1

// ITERASI 3:
// i = 2
// numbers[2] = 3
// Cek: 3 % 2 = 1 (GANJIL)
// Kondisi if terpenuhi → resultTwo = 1 + 3 = 4
// resultTwo sekarang = 4

// ITERASI 4:
// i = 3
// numbers[3] = 4
// Cek: 4 % 2 = 0 (GENAP) ✓
// Kondisi if tidak terpenuhi → skip
// resultTwo tetap = 4

// ITERASI 5:
// i = 4
// numbers[4] = 5
// Cek: 5 % 2 = 1 (GANJIL)
// Kondisi if terpenuhi → resultTwo = 4 + 5 = 9
// resultTwo sekarang = 9


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

for (let i = 0; i < students.length; i++) {
    let studentUpper = students[i].toUpperCase()
    resultThree.push(studentUpper)
}

console.log(resultThree, "<=== RESULT SOAL KETIGA")

// ITERASI 1
// i = 0
// studentUpper = Tito.toUpperCase = TITO 
// resultThree = ["TITO"]

// ITERASI 2
// i = 1
// studentUpper = arY.toUpperCase = ARY 
// resultThree = ["TITO", "ARY"]

// ITERASI 3
// i = 2
// studentUpper = Bostang.toUpperCase = BOSTANG 
// resultThree = ["TITO", "ARY", "BOSTANG"]

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

let resultFour = []

for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].name.length > 5) {
        resultFour.push(people[i].name)
    }
}
console.log(resultFour, "<=== RESULT SOAL KEEMPAT");

// ITERASI 1
// i = 0
// people[0] = {name: 'Andi', age: 17}
// cek umur: 17 > 18 = false
// cek nama: 'Andi'.length = 4 > 5 = false
// condition: false && false = false
// conclusion: tidak memenuhi syarat
// resultFour tetap = []

// ITERASI 2
// i = 1
// people[0] = {name: 'Tito Alexsta', age: 20}
// cek umur: 20 > 18 = true
// cek nama: 'Tito Alexsta'.length = 12 > 5 = true
// condition: true && true = true
// conclusion: memenuhi syarat
// resultFour bertambah = ['Tito Alexsta']

// ITERASI 3
// i = 2
// people[0] = {name: 'Bostang', age: 22}
// cek umur: 22 > 18 = true
// cek nama: 'Bostang'.length = 7 > 5 = true
// condition: true && true = true
// conclusion: memenuhi syarat
// resultFour bertambah = ['Tito Alexsta', 'Bostang']

// ITERASI 4
// i = 0
// people[0] = {name: 'Cici', age: 17}
// cek umur: 17 > 18 = false
// cek nama: 'Cici'.length = 4 > 5 = false
// condition: false && false = false
// conclusion: tidak memenuhi syarat
// resultFour tetap = ['Tito Alexsta', 'Bostang']

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

let totalPrice = 0

for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price
}

console.log(totalPrice, "<=== RESULT SOAL KELIMA");

// ITERASI 1
// i = 0 
// totalPrice = 0 + 10000 = 10000

// ITERASI 2
// i = 1
// totalPrice = 10000 + 5000 = 15000

// ITERASI 3
// i = 2
// totalPrice = 15000 + 3000 = 18000


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = []

for (let i = 0; i < numbersThree.length; i++) {
    let currentNumbers = numbersThree[i]

    if(uniqueNumbers.includes(currentNumbers) === false) {
        uniqueNumbers.push(currentNumbers)
    }
}

console.log(uniqueNumbers, '<=== RESULT SOAL KEENAM');

// ITERASI 1
// i = 0
// currentNumbers = numbersThree[i] = 1
// uniqueNumbers.includes(1) = false // array masih kosong
// if false === false maka true
// push 1 ke uniqueNumbers
// uniqueNumbers = [1]

// ITERASI 2
// i = 1
// currentNumbers = numbersThree[i] = 2
// uniqueNumbers.includes(2) = false // angka 2 belum ada di array uniqueNumbers
// if false === false maka true
// push 2 ke uniqueNumbers
// uniqueNumbers = [1, 2]

// ITERASI 3
// i = 2
// currentNumbers = numbersThree[i] = 2
// uniqueNumbers.includes(2) = true // angka 2 sudah ada di array uniqueNumbers
// if true === false maka false
// skip push karena 2 sudah ada sebelumnya
// uniqueNumbers = [1, 2]

// ITERASI 4
// i = 3
// currentNumbers = numbersThree[i] = 3
// uniqueNumbers.includes(3) = true // angka 3 belum ada di array uniqueNumbers
// if false === false maka true
// push 3 ke uniqueNumbers
// uniqueNumbers = [1, 2, 3]

// ITERASI 5
// i = 4
// currentNumbers = numbersThree[i] = 4
// uniqueNumbers.includes(4) = true // angka 3 belum ada di array uniqueNumbers
// if false === false maka true
// push 4 ke uniqueNumbers
// uniqueNumbers = [1, 2, 3, 4]


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];

let highestPrice = 0
let highestPriceProduct = ''

for (let i = 0; i < products.length; i++) {

    if(products[i].price > highestPrice) {
        highestPrice = products[i].price
        highestPriceProduct = products[i].name
    }
}

console.log(`Produk dengan harga tertinggi yaitu ${highestPriceProduct} dengan harga ${highestPrice}`, '<=== RESULT SOAL KETUJUH');

// ITERASI 1
// i = 0
// products[0].price: 15000000
// highestPrice: 0
// products[0].price > highestPrice === true
// highestPrice = 15000000
// highestPriceProduct = Laptop

// ITERASI 2
// i = 1
// products[0].price: 8000000
// highestPrice: 0
// products[0].price > highestPrice === false
// highestPrice = 15000000
// highestPriceProduct = Laptop

// ITERASI 3
// i = 2
// products[0].price: 3000000
// highestPrice: 0
// products[0].price > highestPrice === false
// highestPrice = 15000000
// highestPriceProduct = Laptop


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
const sentence = words.join(" ")
console.log(sentence, '<=== RESULT SOAL KEDELAPAN');

// EXPLANATION
// Menggunakan .join untuk mengambil semua element array, pake (" ") agar setiap kata dapat dipisah dengan spasi


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

let result = []
let count = 0

for (let i = 0; i < names.length && count < 3; i++) {
    if(names[i].toLocaleLowerCase().includes('a')) {      // pakai toLocaleLowetCase untuk case sensitive pengambilan huruf kapital A
        result.push(names[i])
        count++
    }
}

console.log(result, '<=== RESULT SOAL KESEMBILAN');

// ITERASI 1
// i = 0
// Aldo.includes('a') = true
// push ke result = ['Aldo']
// count = 1

// ITERASI 2
// i = 1
// Budi.includes('a') = false
// result tidak berubah = ['Aldo']
// count = 1

// ITERASI 3
// i = 2
// Caca.includes('a') = true
// push ke result = ['Aldo', 'Caca']
// count = 2

// ITERASI 4
// i = 3
// Dinda.includes('a') = true
// push ke result = ['Aldo', 'Caca', 'Dinda']
// count = 3

// Setelah itu break karena count === 3


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

let countCharacter = 0

for (let i = 0; i < namesTwo.length; i++) {
    countCharacter += namesTwo[i].length
}

console.log(countCharacter, '<=== RESULT SOAL KESEPULUH');

// ITERASI 1
// i = 0
// namesTwo.length = 3
// countCharacter = 0 + 3 = 3

// ITERASI 2
// i = 1
// namesTwo.length = 4
// countCharacter = 3 + 4 = 7

// ITERASI 3
// i = 2
// namesTwo.length = 5
// countCharacter = 7 + 5 = 12

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

let newArray = []

for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) {
        let gabunganNamaUmur = `${peopleTwo[i].name} (${peopleTwo[i].age})`
        newArray.push(gabunganNamaUmur)
    }
}

console.log(newArray, '<=== RESULT SOAL KESEBELAS');

// ITERASI 1
// i = 0
// Tono.age: 22 > 21 = true
// gabunganNamaUmur bertambah menjadi ['Tono (22)']

// ITERASI 2
// i = 1
// Tini.age: 19 > 21 = false
// gabunganNamaUmur tetap ['Tono (22)']

// ITERASI 3
// i = 2
// Tara.age: 25 > 21 = true
// gabunganNamaUmur menjadi ['Tono (22)', 'Tara (25']


