//  some method = 63

const number = [3,5,7,9,11]

const ans = number.some((numbers)=>{
  return numbers % 2 === 0
});

console.log(ans);
// --------------------------------------------------------
const userCart = [
  {productId: 1, productName: "mobile", price: 12000},
  {productId: 2, productName: "laptop", price: 22000},
  {productId: 3, productName: "tv", price: 35000},
  {productId: 3, productName: "macbook", price: 250000},
]

const answ = userCart.some((price)=>{
  return price.price > 100000;
})

console.log(answ);