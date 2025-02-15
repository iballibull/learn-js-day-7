function bookPurchasing(bookDetail, purchasedAmount) {
  const discount = 30;
  const tax = 10;
  let { title, author, price, stok } = bookDetail;

  if (purchasedAmount > stok) return `Stock of books only ${stok}`;

  let totalPrice = 0;
  for (let i = 1; i <= purchasedAmount; i++) {
    if (stok < 1) break;

    totalPrice += price;
    stok--;
  }

  let discountAmount = (totalPrice * discount) / 100;
  let priceAfterDiscount = totalPrice - discountAmount;
  let taxAmount = (priceAfterDiscount * tax) / 100;
  let finalPrice = priceAfterDiscount + taxAmount;

  let stockMessage = stok > 0 ? `Books are still ${stok} for purchase.` : 'Out of stock after this purchase.';

  return {
    bookDetail: { title, author, price, stok },
    purchasedAmount,
    discount: `${discount}%`,
    discountAmount,
    priceAfterDiscount,
    tax: `${tax}%`,
    taxAmount,
    finalPrice,
    stockMessage,
  };
}

let purchasedAmount = 9;

let bookDetail = {
  title: 'Atomic Habits',
  author: 'James Clear',
  price: 100000,
  stok: 10,
};

const purchase = bookPurchasing(bookDetail, purchasedAmount);
bookDetail.stok = purchase.bookDetail.stok;

console.log(purchase);
