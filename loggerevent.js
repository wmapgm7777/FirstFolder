//work with appevent2.js
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class LoggerEvent extends EventEmitter {
    sendevent(message)
    {
      //Send an HTTP Request
      console.log(message);
      // Raise an event
      this.emit('messageLogged3' , {id: 1, url:'http://'});
        
    }

}

module.exports = LoggerEvent;