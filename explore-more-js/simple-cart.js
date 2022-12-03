const shoppingCart = [
    {name:'shoe',price : 1200},
    {name:'shirt',price : 2200},
    {name:'pant',price : 3700},
    {name:'belt',price : 700}
];

function totalCost(products){
    let totalExpences = 0;
    for(let i = 0;i<products.length;i++){
        const product = products[i];
        totalExpences = totalExpences + product.price;
    }
    return totalExpences;
}

const expences = totalCost(shoppingCart);
console.log(expences);