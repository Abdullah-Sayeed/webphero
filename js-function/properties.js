var shoppingCart = {
    books:3,
    sunglass:1,
    keyboard: 5,
    mouse:1,
    pen:25
}

var penCount = shoppingCart.pen;
console.log(penCount);

var booksCount = shoppingCart['books'];
console.log(booksCount);

var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
console.log(propertyValues);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);