var shoppingCart = {
    books: 3,
    sungrlass: 1,
    keyboard:5,
    mouse:1,
    pen: 25,
    shoes:2
}
 var propertyKeys = Object.keys(shoppingCart);
 var proValue = Object.values(shoppingCart);

for(var i = 0; i<propertyKeys.length;i++){
    var propertyName = propertyKeys[i];
    var proValue = shoppingCart[propertyName];
    console.log(propertyName,proValue);
}
// for in loop

for(var propertyKeys in shoppingCart){

    const value = shoppingCart[propertyKeys];
    console.log(propertyKeys,value); 

}