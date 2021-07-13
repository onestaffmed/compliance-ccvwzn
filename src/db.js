var licenses  = require('./licenses.json');
var education = require('./education.json');

// and so on

module.exports = function() {
return {
firstRoute  : licenses,
secondRoute : education,

// and so on
 }
}