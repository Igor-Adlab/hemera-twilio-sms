import * as HP from 'hemera-plugin';

import {Sender} from './Sender';
import {TOPIC_TWILIO_SMS, CMD_SEND_SMS} from "./constants";

export * from './constants';

export const options = { name: 'hemera-twilio-sms' };
export const plugin = HP((hemera, options: any, next: Function) => {
    const sender = new Sender(options.account, options.token);

    hemera.add({
        topic: TOPIC_TWILIO_SMS,
        cmd: CMD_SEND_SMS,
    }, (request: any, cb) => {
        sender.send(request.payload)
            .then(data => cb(null, data))
            .catch(err => cb(err, null))
        }
    );

    next();
}, '>=2');
