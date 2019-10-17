class Message {
    constructor() {
        this.message = '';
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(unsubscriber) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== unsubscriber);
    }

    updateMessage(message) {
        this.message = message;
        this.notifyAll();
    }

    notifyAll() {
        this.subscribers.forEach(subscriber => {
            subscriber.update(this.message);
        });
    }

}

class Subscriber {

    constructor(name){
        this.name= name;
    }

    update(message) {
        console.log(this.name, message);
    }
}

const subs1 = new Subscriber('Subs1');
const subs2 = new Subscriber('Subs2');
const subs3 = new Subscriber('Subs3');


const message = new Message();
message.subscribe(subs1);
message.subscribe(subs2);

message.updateMessage('Love you!');

