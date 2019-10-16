const Color = Object.freeze({
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue'
})

const Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    huge: 'huge'
})


class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

const apple = new Product('apple', Color.red, Size.small);
const bottle = new Product('bottle', Color.yellow, Size.medium);
const mobile = new Product('mobile', Color.red, Size.medium);
let products = [apple, bottle, mobile];

class Filter {
    filterByColor(products, color) {
       return products.filter(product => product.color === color);
    }
}

const fl = new Filter();

for (let product of fl.filterByColor(products, Color.red)) {
    console.log(product);
}