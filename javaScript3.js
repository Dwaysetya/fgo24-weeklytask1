// JAVASCRIPT 3.1

const printSquare = (panjang) => {
  let result = "";

  if (typeof panjang === "number") {
    for (let i = 1; i <= panjang; i++) {
      for (let j = 1; j <= panjang; j++) {
        result += j;
      }
      result += "\n";
    }
    console.log(result);
  } else {
    console.log("Input harus berupa angka");
  }
};

printSquare(6);

//JAVASCRIPT 3.2 SPREAD OPERATOR

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const spreadOperator = [...arr1, ...arr2];

console.log(spreadOperator);
