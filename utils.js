const fs = require('fs');

const items = [
    {name: 'watchmen', price:14.99},
    {name: 'arrival', price:12.99},
    {name: 'lord of the rings', price:10.99},
    {name: 'fundação', price:15.99},
    {name: 'o hobbit', price:13.99},
    {name: 'narnia', price:9.99}
];

function getData(reference, field){
    const file = JSON.parse(fs.readFileSync('./input.json'));
    var result = 0;

    file.forEach(element => {
        if(element.literature == reference)
            result = element.title;
    });

    return result;
}

//console.log(items.map(a=>a.price*100));

function filterItems(price){ //return the number of filtered items
    return items.filter(a=>a.price>price).length;
}

function sumItems(price){
    return items.filter(a=>a.price>price).reduce((total, a)=>{
        return a.price + total;
    },0);
}

function productDiscount(productName, discount){
    const product = items.find(a=>a.name===productName);
    return  product.price - (product.price * discount);
}

function returnItemsOverPrice(price){
    return items.filter(a=>a.price>price);
}

function returnPrice(name){
    return items.find(a=>a.name === name).price;
}

function localBinarySearch(array, left, right, value){
    middle = Math.trunc((left+right)/2);
    if(left<=right){
        if(array[middle]===value) {
            return "a";
        }
        else if (value < array[middle]){
            localBinarySearch(array, left, middle-1, value);
        }else {
            localBinarySearch(array, middle+1, right, value);
        }
    }else{
        return "b";
    }
}

function binarySearch(array, left, right, value){
    array.sort((a,b)=>{
        return a-b;
    })

    return localBinarySearch(array, left, right, value);
   
}  

class car{
    constructor(owner, brand){
        this.owner = owner;
        this.brand = brand;
    }

    carCall(){
        return 'Hello ' + this.owner + ', you have a ' + this.brand;
    }

    static carBrand(brand){
        return 'This is a ' + brand;
    }
}

class Model extends car {
    constructor(owner, brand, mod) {
      super(owner, brand);
      this.model = mod;
    }
    
    show() {
      return this.carCall() + ', it is a ' + this.model;
    }
}

function carCall(owner, brand){
    const newCar = new car(owner, brand);
    return newCar.carCall();
}

function carBrandCall(brand){
    return car.carBrand(brand);
}

function carModel(owner, brand, model){
    const newCarModel = new Model(owner, brand, model);
    return newCarModel.show();
}

exports.getData = getData;
exports.filterItems = filterItems;
exports.sumItems = sumItems;
exports.productDiscount = productDiscount;
exports.returnItemsOverPrice = returnItemsOverPrice;
exports.returnPrice = returnPrice;
exports.binarySearch = binarySearch;
exports.carCall = carCall;
exports.carBrandCall = carBrandCall;
exports.carModel = carModel;