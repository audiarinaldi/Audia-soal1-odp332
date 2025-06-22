/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven(input) {
    if (typeof input !== 'number') {
        return 'invalid input'
    }
    if(input % 2 == 0) {
        return 'genap'
    } else {
        return 'ganjil'
    }
}

console.log(checkOddEven(5)); // ganjil
console.log(checkOddEven(2)); // genap
console.log(checkOddEven("enam")); // invalid input
console.log('===================================');

/*
Penjelasan menggunakan contoh console log pertama (5) 
1. checkin on what type of the input, in this case 5 merupakan number
2. masuk ke if kedua, 5 % 2 == 0 false
3. return ganjil
*/


/**
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

function checkMature(age) {
    if (typeof age !== 'number') {
        return 'invalid input'
    }
    if (age < 0) {
        return 'invalid input'
    }
    if (age >= 18) {
        return 'Dewasa'
    } else {
        return 'Belum Dewasa'
    }
}

console.log(checkMature(18)); // Dewasa
console.log(checkMature(17)); // Belum dewasa
console.log(checkMature("enam")); // invalid input
console.log(checkMature(-1)); // invalid input
console.log('===================================');

/*
Penjelasan
1. checkin on what type of the input karena jika bukan number langsung mengembalikan return 'invalid input'
2. checkin on apabila age < 0 maka langsung mengembalikan return 'invalid input' karena input bernilai negative
3. apabila input berupa number dan nilainya tidak negative, dicek apakah input >=8 jika ya, maka output 'Dewasa' jika tidak 'Belum dewasa'
*/


/**
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

function scoreReport(score) {
    if (typeof score !== 'number') {
        return 'invalid input'
    }
    if (score < 0 || score > 100) {
        return 'invalid input'
    }
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60){
        return 'D'
    } else {
        return 'E'
    }
}


console.log(scoreReport(90)); // A
console.log(scoreReport(89)); // B
console.log(scoreReport(75)); // C
console.log(scoreReport(59)); // E
console.log(scoreReport(101)); // invalid input
console.log(scoreReport(-1)); // invalid input
console.log(scoreReport("sembilan puluh")); // invalid input
console.log('===================================');

/*
Penjelasan
1. check tipe data score jika bukan number maka langsung mengembalikan nilai 'invalid input'
2. check apakah score bernilai negatif atau >100 jika ya maka langsung mengembalikan nilai 'invalid input' karena tidak valid 
3. menggunakan if else untuk mengkategorikan score, contoh score 90 maka mendapatkan nilai 'A', apabila score 59 maka mendapatkan nilai 'C'
*/

/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

function loopCheckOddEven(input) {
    if(typeof input !== 'number') {
        console.log('invalid input');
        // return 'invalid input'
    }
    for (let i = 1; i <= input; i++) {
        if (i % 2 === 0) {  
            console.log(i + ' => Bilangan Genap');  
        } else {
            console.log(i + ' => Bilangan Ganjil');
        }
    }
}

loopCheckOddEven(5)
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
//loopCheckOddEven("lima") // invalid input
console.log('===================================');

/*
Penjelasan
Cek apakah input merupakan tipe selain 'number' jika ya maka langsung mengembalikan 'invalid input'
Jika input merupakan 'number' maka:
Iterasi 1
i = 1
1 % 2 = 1 -> else
Output: "1 => Bilangan Ganjil"
Iterasi 2
i = 2
2 % 2 = 1 -> if
Output: "2 => Bilangan Genap"
Iterasi 3
i = 3
3 % 2 = 1 -> else
Output: "3 => Bilangan Ganjil"
Iterasi 4
i = 4
4 % 2 = 1 -> if
Output: "4 => Bilangan Genap"
Iterasi 5
i = 5
5 % 2 = 1 -> else
Output: "5 => Bilangan Ganjil"
*/

/**
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

function totalValue(inputNumber) {
    if (typeof inputNumber === "number"){
        let totalNumber = 0
        for (let index = 1; index <=inputNumber; index++){
            totalNumber = totalNumber + index
        }
        return totalNumber
    }else {
        return "invalid input"
    }

}

console.log(totalValue(100)); // 5050
console.log(totalValue("empat")); // invalid input
console.log('===================================');

/*
Penjelasan
jika input adalah number maka:
Iterasi 1
i = 1
total number = 0 + 1 = 1
Iterasi 2
i = 2
total number = 1 + 2 = 3
Iterasi 3
i = 3
total number = 3 + 3 = 6
. . . .
Iterasi 100
i = 100
total number = 4950 + 100 = 5050
return hasil (5050) ke pemanggil function

jika input bukan number maka return "invalid input"
*/


/**
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

function checkVowels(inputstr) {
    if (typeof inputstr !== 'string') {
        return 'Invalid input';
    }
    const vowels = ['a', 'i', 'u', 'e', 'o']
    let count = 0
    const lowerString = inputstr.toLowerCase()

    for (let i = 0; i < lowerString.length; i++) {
        let current = lowerString[i]

        if(vowels.includes(current)) {
            count++
        }
    }
    return count
}

console.log(checkVowels("I Love JavaScript")); // 6
console.log(checkVowels("mie ayam")); //4
console.log(checkVowels("5")); // 0
console.log(checkVowels(5)); // invalid input
console.log('===================================');

/*
Penjelasan
1. cek dulu apakah input (inpustr) typenya string atau bukan, jika bukan string maka nilai yang dikembalikan "Invalid input", jika string maka lanjut
2. membuat array vowels (untuk comparasion dengan input)
3. mengubah input menjadi lower case karena javascript case sensitive (eg. A tidak sama dengan a sedangkan pada array vowels yang dicantumkan a)
4. menggunakan for looping dan if condition dengan contoh input 'mie ayam':
   iterasi 1:
   m = bukan vokal
   count = 0
   iterasi 2:
   i = huruf vokal
   count = 1
   iterasi 3:
   e = huruf vokal
   count = 2
   iterasi 4:
   a = huruf vokal
   count = 3
   iterasi 5:
   y = bukan vokal
   count = 3
   iterasi 6:
   a = huruf vokal
   count = 4
   iterasi 7:
   m = bukan vokal
   count = 4
*/


/**
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

function checkVowelConsonant(char) {
    // code di scope ini yaa
    const vowels = ['a', 'i', 'u', 'e', 'o']
    
    if(vowels.includes(char.toLowerCase())) {
        return "Vokal"
    } else {
        return "Konsonan"
    }
}

console.log(checkVowelConsonant('A')); // Output: "Vokal"
console.log(checkVowelConsonant('b')); // Output: "Konsonan"
console.log(checkVowelConsonant('a')); // Output: "Vokal"
console.log('===================================');

/*
Penjelasan:
1. membuat array vowels yang akan dicompare
2. input (char) diconvert ke lowercase (karena javascript case sensitive)
3. menggunakan method .includes untuk mengecek apakah pada input terdapat vowels
4. jika ya return 'vokal' jika tidak return 'konsonan'
*/


/**
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

function canVote(age) {
    // code di scope ini yaa
    if(age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(canVote(20)); // true
console.log(canVote(17)); // false
console.log('===================================');

/*
Penjelasan:
menggunakan if case jika input (age) >= 18 maka return true dan jika tidak maka return false
*/


/**
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

function getDayName(dayNumber) {
    // code disini
    if(dayNumber === 1) {
        return 'Senin'
    } else if (dayNumber === 2) {
        return 'Selasa'
    } else if (dayNumber === 3) {
        return 'Rabu'
    } else if (dayNumber === 4) {
        return 'Kamis'
    } else if (dayNumber === 5) {
        return 'Jumat'
    } else if (dayNumber === 6) {
        return 'Sabtu'
    } else if (dayNumber === 7) {
        return 'Minggu'
    } else {
        return 'Nomor hari tidak valid'
    }

}

console.log(getDayName(1)); // Output: "Senin"
console.log(getDayName(5)); // Output: "Jumat"
console.log(getDayName(8)); // Output: "Nomor hari tidak valid"
console.log('===================================');

/*
Penjelasan
contoh getDayName(5)
1. dayNumber = 5
2. cek dayNumber === 1 ? false
3. cek dayNumber === 2 ? false
4. cek dayNumber === 3 ? false
5. cek dayNumber === 4 ? false
6. cek dayNumber === 5 ? true
7. masuk ke else if
8. return 'Jumat'
*/

/**
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

function reverseArray(arr) {
    // code disini yaa
    let reverse = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
console.log('===================================');

/*
Penjelasan
Iterasi 1:
i = 2 ambil arr[2] = 'c' -> reverse = ['c']
Iterasi 2:
i = 1 ambil arr[1] = 'b' -> reverse = ['c', 'b']
Iterasi 2:
i = 0 ambil arr[0] = 'a' -> reverse = ['c', 'b', 'a']
*/


/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

const isPalindrome = (inputUser) => {
    const cleanStr = inputUser.replace(/ /g, '').toLowerCase(); 
    
    let left = 0
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false
        }
        left++  
        right--  
    }
    
    return true;  
}

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("kodok")); // true
console.log(isPalindrome("makan malam")); // false

/*
Penjelasan 
menggunakan contoh 'makanmalam'
1. Membersihkan input (inputUser) dari space menggunakan replace(/ /g, '') dan mengubah menjadi lowercase menggunakan toLowerCase
2. Menggunakan loop while membandingkan string dari sisi kanan dan kiri:
   Iterasi 1:
   left = 0; right = 9
   compare: clearStr[0] = 'm' | clearStr[0] = 'm'
   condition: true
   Iteration 2:
   left = 1, right = 8
   compare: clearStr[1] = 'a' | clearStr[8] = 'a'
   condition: true
   Iteration 3:
   left = 2, right = 7
   compare: clearStr[2] = 'k' | clearStr[7] = 'l'
   condition: false
3. Begitu ketemu condition false langsung return nilai false
*/

/*
*/