class MacbookFactory {
    create(version, osName) {
        switch (version) {
            case 'PRO':
                return new Macbook('PRO', osName);
            case 'AIR':
                return new Macbook('AIR', osName);
            default:
                break;
        }
    }
}

class Macbook {
    constructor(version, osName) {
        this.version = version;
        this.osName = osName;
    }
}

const macPro = new MacbookFactory().create('PRO','Sierra' )
console.log(macPro); // Macbook { version: 'PRO', osName: 'Sierra' }

const macAir = new MacbookFactory().create('AIR', 'Catalina');
console.log(macAir); // Macbook { version: 'AIR', osName: 'Catalina' }