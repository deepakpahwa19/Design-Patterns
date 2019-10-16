class Person {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }

    clone() {
        return new Person(this.name, this.hobby);
    }
}

const person1 = new Person('Deepak', 'Cricket');
console.log(person1); // Person { name: 'Deepak', hobby: 'Cricket' }

const person2 = person1.clone();
console.log(person2); // Person { name: 'Deepak', hobby: 'Cricket' }
