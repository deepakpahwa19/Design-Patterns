class Browser {
    constructor() {
        if (typeof Browser.instance === 'object') {
            return Browser.instance;
        }
        Browser.instance = this;
        return this;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const browser = new Browser();
browser.setName('Deepak'); 
console.log(browser.getName()); // Deepak

const bro2 = new Browser();
console.log(bro2.getName()); // Deepak
