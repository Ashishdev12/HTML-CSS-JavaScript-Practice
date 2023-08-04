//  every Method = 62

const method = [2,4,6,8,10]

const ans = method.every((number)=>{
  return number % 2 === 0 
})

console.log(ans);
// -------------------------------------------------------------

const userCart = [
  {productId: 1, productName: "mobile", price: 12000},
  {productId: 2, productName: "laptop", price: 22000},
  {productId: 3, productName: "tv", price: 15000},
]

const user = userCart.every((price)=>{
  return price.price < 30000
})

console.log(user);