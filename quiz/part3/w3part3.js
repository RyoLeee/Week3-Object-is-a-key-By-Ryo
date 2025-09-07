// SOAL 1

function changeMe(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let longNme = arr[i][0] + ` ` + arr[i][1];
    result[longNme] = {
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] <= 2025 ? 2025 - arr[i][3] : `Ivalid Birth Year`,
    };
  }
  console.log(result);
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); //

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 2

function shoppingTime(memberId, money) {
  let disconItems = {
    sepatuStecu: [1500000, `Sepatu Stecu`],
    bajuZoro: [500000, `Baju Zoro`],
    bajuHn: [250000, `Baju H&N`],
    sweterUniqlo: [175000, `Sweter Uniqloh`],
    casingHp: [50000, `Casing HP`],
  };

  let uang = money;
  let listPurchased = [];
  let result = {};
  if (!memberId) {
    return `Mohon maaf, toko X hanya berlaku untuk member saja`;
  }
  if (money <= 50000) {
    return `Maaf uang tidak cukup!`;
  }

  let changedMoney = 0;
  let i = 0;
  for (let key in disconItems) {
    if (disconItems[key][0] <= money) {
      money -= disconItems[key][0];
      listPurchased.push(disconItems[key][1]);
    }
  }
  changedMoney = money;

  result.memberId = memberId;
  result.money = uang;
  result.listPurchased = listPurchased;
  result.changedMoney = changedMoney;
  return result;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 3

function countProfit(shoppers) {
  var listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];

  const result = [];
  for (let i = 0; i < listBarang.length; i++) {
    const [productName, price, intilalStock] = listBarang[i];

    let buyers = [];
    let leftOver = intilalStock;
    let totalProfit = 0;

    for (let j = 0; j < shoppers.length; j++) {
      let shopper = shoppers[j];
      if (
        shopper.product === productName &&
        shopper.amount <= leftOver
      ) {
        buyers.push(shopper.name);
        leftOver -= shopper.amount;
        totalProfit += price * shopper.amount;
      }
    }
    let obj = {
      product : productName,
      shoppers : buyers,
      leftOver : leftOver,
      totalProfit : totalProfit,
    }
    result.push(obj);
  }
  return result
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 },
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 },
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
