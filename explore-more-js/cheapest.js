const smartPhones = [
    {name : 'samsung',camara: '12mp',storage:'32gb',price: 66000,color:'black'},
    {name : 'apple',camara: '12mp',storage:'32gb',price: 96000,color:'black'},
    {name : 'xiaomi',camara: '12mp',storage:'32gb',price: 25000,color:'black'},
    {name : 'Oppo',camara: '12mp',storage:'32gb',price: 30000,color:'black'},
    {name : 'Oneplus',camara: '12mp',storage:'32gb',price: 49000,color:'black'},
    {name : 'Vivo',camara: '12mp',storage:'32gb',price: 28000,color:'black'},
    {name : 'Nokia',camara: '12mp',storage:'32gb',price: 40000,color:'black'},
    {name : 'iqoo',camara: '12mp',storage:'32gb',price: 22000,color:'black'},
    {name : 'sony',camara: '12mp',storage:'32gb',price: 80000,color:'black'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i= 0;i<phones.length;i++){
        let phone = phones[i];
        if(phone.price<cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

let result = cheapestPhone(smartPhones);
console.log(result);