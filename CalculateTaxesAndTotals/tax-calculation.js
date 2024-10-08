const taxGST = 5; //General Sales Tax (like Federal Sales Tax)
const taxPST = 8; //Provincial Sales Tax (like State Tax)

export const calculateTotal = (prices) => {
  /* TODO:
    Complete this method to calculate the totals.
  */

  // Sum the prices before tax
  const beforeTax = prices.reduce((acc, price) => acc + price, 0);

  // Calculate GST and PST
  const GST = (beforeTax * taxGST) / 100;
  const PST = (beforeTax * taxPST) / 100;

  // Calculate the total sum
  const sum = beforeTax + GST + PST;

  return {
    beforeTax: beforeTax,
    GST: GST,
    PST: PST,
    sum: sum,
  };
};

export const showTotals = (prices) => {
  const totals = calculateTotal(prices);
  return `
      Before tax: $${totals.beforeTax.toFixed(2)}
      GST: $${totals.GST.toFixed(2)}
      PST: $${totals.PST.toFixed(2)}
      -----------------
      Sum total: $${totals.sum.toFixed(2)}
  `;
};
