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

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(product) {
        return product.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(product) {
        return product.size === this.size;
    }
}

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(product) {
        return this.specs.every(spec => spec.isSatisfied(product));
    }
}

class OrSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(product){
        return this.specs.filter(spec => spec.isSatisfied(product)).reduce((flag, value) => value || flag, false);
    }
}

class Filter {
    filter(products, spec) {
        return products.filter(product => spec.isSatisfied(product));
    }
}

const fl = new Filter();
for (let product of fl.filter(products, new ColorSpecification(Color.red))) {
    console.log(product);
}

console.log('==========');

for (let product of fl.filter(products, new SizeSpecification(Size.medium))) {
    console.log(product);
}

console.log('==========');

const specs = new AndSpecification(new ColorSpecification(Color.yellow), new SizeSpecification(Size.medium));

for (let product of fl.filter(products, specs)) {
    console.log(product);
}

console.log('==========');

const specs = new OrSpecification(new ColorSpecification(Color.yellow), new SizeSpecification(Size.small));

for (let product of fl.filter(products, specs)) {
    console.log(product);
}