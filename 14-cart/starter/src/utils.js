export const getTotal = (cart) => {
  console.log("cart ", cart);
  let totalAmount = 0;
  let totalCost = 0;
  //   get key value pair and destructure
  //   for (const [key, { amount, price }] of cart) {
  //     totalAmount += amount;
  //     totalCost += parseFloat(price);
  //   }
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
