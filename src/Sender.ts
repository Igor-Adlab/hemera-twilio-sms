import * as Twilio from 'twilio';

export class Sender {

    client: any;
    credentials: any;

    constructor(account, token) {
        this.credentials = { account, token };
        this.client = new Twilio(account, token);
    }

    send(payload): Promise<any> {
        return this.client.messages.create(payload)
    }
}