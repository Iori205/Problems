// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
// function getDiscountedProducts(products) {
//   const discountPercent = products.filter ((product) => {
//     if (product.discountPercent > 0) {
//         return product
//     }
//   })
//   return discountPercent
// }
// console.log(getDiscountedProducts(data))

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getOutOfStockProducts(products) {
//   const stock = products.filter((product) => {
//     if (product.stock === 0) {
//         return product
//     }
//   })
//   return stock
// }
// console.log(getOutOfStockProducts(data))

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getExpensiveProducts(products) {
//   const Expensiveproduct = products.filter((product) => {
//     if (product.price > 1000000) {
//         return product
//     }
//   })
//   return Expensiveproduct
// }
// console.log(getExpensiveProducts(data))

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getComputers(products) {
//    const computers = products.filter((product) => {
//     if (product.category === "Computers") {
//         return product
//     }
//    })
//    return computers
// }
// console.log(getComputers(data))

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
// function filterByBrand(products, brandName) {
//   const brand = products.find((product) => {
//     return product.brand = brandName
//   })
//   return brand
// }
// console.log(filterByBrand(data, "Apple"))

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
// function addIsHeavyFlag(products) {
//   products.map((product) => {
//     if (product.weight > 1) {
//         product.isHeavy = true
//     } else { product.isHeavy = false}
//   })
//   return products
// }
// console.log(addIsHeavyFlag(data))

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
// function increasePriceByTenPercent(products) {
//   const price = products.map((product, i) => {
//     return {index: i, ...product, price: product.price * 1.1}
//   })
//   return price
// }
// console.log(increasePriceByTenPercent(data))


// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
// function addFinalPrice(products) {
//   const finalPrice = products.map((product, i) => {
//     let k = (product.price * product.discountPercent)/100
//     return {index: i, ...product,finalPrice: product.price - k}
//   })
//   return finalPrice
// }
// console.log(addFinalPrice(data))

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
// function getTopRatedProduct(products) {
//   let maxrating = products[0]
//   for(i=1; i < products.length; i++) {
//     if (maxrating.rating < products[i].rating) {
//        maxrating = products[i]
//     }
//   }
//   return maxrating
// }
// console.log(getTopRatedProduct(data))

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
// function getCheapestProduct(products) {
//   let Minrating = products[0]
//   for (i=0; i < products.length; i++) {
//     if (Minrating.rating > products[i].rating) {
//         Minrating = products[i]
//     }
//   }
//   return Minrating
// }
// console.log(getCheapestProduct(data))

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
    let num = []
  for(i=0; i < products.length; i++) {
    if (products[i].stock > 0) {
       num = products[i]
    }
  }
  return num
}
console.log(getTotalStock(data))

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  // ...
}

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  // ...
}

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  // ...
}

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  // ...
}

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  // ...
}

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  // ...
}

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  // ...
}

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  // ...
}

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  // ...
}

 