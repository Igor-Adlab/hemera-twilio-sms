# Hemera SMS
Plugin for Twilio SMS

## Examples

### Setup
```javascript
const FCM = require('hemera-twilio-sms');
// Code...
hemera.use(FCM, { account: '...', token: '...' });
```

### Send Text Message
```javascript
hemera.act({
	cmd: "CMD_SEND_SMS",
	topic: "TOPIC_TWILIO_SMS",
	payload: {
	    from: '...',
        to: '...',
        body: '...'
	},
}, function() {})
```