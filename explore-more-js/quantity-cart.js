const shoppingCart = [
    {name:'shoe',price : 1200, quantity: 1},
    {name:'shirt',price : 2200, quantity: 3},
    {name:'pant',price : 3700, quantity: 2},
    {name:'belt',price : 700, quantity: 1},
];

function totalCost(products){
    let totalExpences = 0;
    for(let i = 0;i<products.length;i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        totalExpences = totalExpences + productTotal;
    }
    return totalExpences;
}

const expences = totalCost(shoppingCart);
console.log(expences);