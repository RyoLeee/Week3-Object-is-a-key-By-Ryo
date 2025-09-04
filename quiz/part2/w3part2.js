// SOAL 1

function digitPerkalianMinimum(angka) {
  if (angka <= 1) {
    return 2;
  };
  let couple = [];
  for (let i = 1; i <= angka; i++) {
    let fNumb = i;
    for (let k = i + 1; k <= angka; k++) {
        let tNumb = k;
        if (fNumb * tNumb === angka) {
            couple.push(`${i}${k}`);
        };
    };
  };
  
  let lower = Infinity;
  for (let j = 0; j < couple.length; j++) {
    if (couple[j].length < lower) {
        lower = couple[j].length;
    };
  };
  return lower
};

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(2)); // 2


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
function urutkanAbjad(str) {
  let digit = str.split(``);
  let apcCode = [];
  for (let i = 0; i < digit.length; i++) {
    let numb = digit[i].charCodeAt(0);
    apcCode.push(numb);
  }
  for (let i = 0; i < apcCode.length; i++) {
    for (let j = 0; j < apcCode.length - 1; j++) {
        if (apcCode[j + 1] < apcCode[j]) {
            let temp = apcCode[j];
            apcCode[j] = apcCode[j + 1];
            apcCode[j + 1] = temp;
        }
    }
  }
  let toAvbt = [];
  for (let h = 0; h < apcCode.length; h++) {
    let alvabet = String.fromCharCode(apcCode[h]);
    toAvbt.push(alvabet);
  }
  return toAvbt.join(``)
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3

function tukarBesarKecil(kalimat) {
  let newArr = [...kalimat];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i].toLowerCase()) {
        newArr[i] = newArr[i].toUpperCase();
    } else if (newArr[i] === newArr[i].toUpperCase()) {
      newArr[i] = newArr[i].toLowerCase();
    }
  }
  return newArr.join(``);
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4

function checkAB(num) {
  let aA = [];
  let bB = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === `a`) {
      aA.push(i);
    } else if (num[i] === `b`) {
      bB.push(i);
    }
  }
  for (let j = 0; j < aA.length; j++) {
    for (let k = 0; k < bB.length; k++) {
      if (Math.abs(aA[j] - bB[k] === 4 || bB[k] - aA[j] === 4)) {
        return true;
      }
    }
  }
  return false
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false