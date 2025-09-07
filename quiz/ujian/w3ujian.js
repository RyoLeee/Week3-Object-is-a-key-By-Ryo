// FINAL TASK

function deepSum(arr) {
  if (arr.length < 1) {
    return `No Number`;
  }

  let column = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        column.push(arr[i][j][k]);
      }
    }
  }
  let output = 0;
  for (let l = 0; l < column.length; l++) {
    output += column[l];
  }
  return output;
}

//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number

console.log(` `);
console.log(` `);
console.log(` `);

// FINAL TASK 2

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  if (arrPenumpang.length < 1) {
    return [];
  }

  let result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let from = null;
    let to = null;
    for (let j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        from = j;
      }
      if (arrPenumpang[i][2] === rute[j]) {
        to = j;
      }
      if (to !== null && from !== null) {
        let obj = {
          penumpang: arrPenumpang[i][0],
          naikDari: arrPenumpang[i][1],
          tujuan: arrPenumpang[i][2],
          bayar: (to - from) * 2000,
        };
        result.push(obj);
        break;
      }
    }
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

console.log(` `);
console.log(` `);
console.log(` `);

// FINAL TASK 3

function highestScore(students) {
  let result = {};
  for (let i = 0; i < students.length; i++) {
    let classNme = students[i].class;
    if (!result[students[i].class]) {
      result[classNme] = {
        name: students[i].name,
        score: students[i].score,
      };
    } else {
      if (result[classNme].score < students[i].score) {
        result[classNme] = {
          name: students[i].name,
          score: students[i].score,
        };
      }
    }
  }
  return result;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}

console.log(` `);
console.log(` `);
console.log(` `);

// LAST TASK

function graduates(students) {
  let result = {};
  for (let i = 0; i < students.length; i++) {
    let person = students[i];
    if (!result[person.class]) {
      result[person.class] = [];
    }
    if (person.score >= 75) {
      let obj = {
        nama: person.name,
        score: person.score,
      };
      result[person.class].push(obj);
    }
  }
  return result;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
