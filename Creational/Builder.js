class Request {
    constructor() {
        this.url = '';
        this.header = '';
        this.payload = '';
    }
}

class RequestBuilder {

    constructor() {
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    setHeader(header) {
        this.request.header = header;
        return this;
    }

    setPayload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }
}

const requestBuilder = new RequestBuilder()
    .forUrl('https://www.google.com')
    .setHeader('application/json')
    .setPayload({ name: 'Deepak' })
    .build();

console.log(requestBuilder);
// Output
/* Request {
  url: 'https://www.google.com',
  header: 'application/json',
  payload: { name: 'Deepak' } } */