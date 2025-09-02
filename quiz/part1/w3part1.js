// SOAL 1

function angkaPrima(angka) {
  let amount = 0;
  let i = 1;
  while (i <= angka) {
    if (angka % i === 0) {
      amount += 1;
      i++;
    }
    i++;
  }
  if (amount === 2) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2

function fpb(angka1, angka2) {
  function compress(angka) {
    let soNumb = [];
    for (let i = 1; i <= angka; i++) {
      if (angka % i === 0) {
        soNumb.push(i);
      }
    }
    return soNumb;
  }

  let factor1 = compress(angka1);
  let factor2 = compress(angka2);

  let praResult = [];
  for (let k = 0; k < factor1.length; k++) {
    if (factor2.includes(factor1[k])) {
      praResult.push(factor1[k]);
    }
  }
  let result = praResult[praResult.length - 1];
  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3

function cariMedian(arr) {
  let length = arr.length;
  if (length % 2 !== 0) {
    let mid = Math.floor(arr.length / 2);
    return arr[mid];
  } else {
    let doubleMid = Math.ceil(arr.length / 2);
    let result = (arr[doubleMid] + arr[doubleMid - 1]) / 2;
    return result
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4

function cariModus(arr) {
  if (arr.every(val => val === arr[0])) {
    return - 1;
  }

  let modus = {};
  let sortingArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortingArr.length; i++) {
    if (!modus[sortingArr[i]]) {
      modus[sortingArr[i]] = 1;
    } else {
      modus[sortingArr[i]]++;
    }
  }
  
  let higher = 0;
  let result = -1;
  for (let key in modus) {
    if (modus[key] > higher && modus[key] > 1) {
      higher = modus[key]
      result = key;
    }
  }
  return result
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 5

function ubahHuruf(kata) {
  let newArr = kata.split(``);
  let dNumb = [];
  for (let i = 0; i < newArr.length; i++) {
    dNumb.push(newArr[i].charCodeAt());
  }
  for (let j = 0; j < dNumb.length; j++) {
    let amount = dNumb[j] + 1;
    if (amount <= 122) {
      dNumb[j] += 1;
    } else {
      dNumb[j] = 97;
    };
  }

  let result = [];
  for (let i = 0; i < dNumb.length; i++) {
    let toAvbt = String.fromCharCode(dNumb[i]);
    result.push(toAvbt);
  }
  return result.join(``);
};

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semzangat')); // tfnbohbu