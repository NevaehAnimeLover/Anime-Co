var url = 'https://mylogger.io/log'

function log(message) {

console.log(message)
}

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

module.exports.log = log;
