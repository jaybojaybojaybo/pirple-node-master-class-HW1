/*
* Helpers for various tasks
*
*/

//Dependencies
const crypto = require('crypto');
const config = require('./config');


// Container for all the helpers
let helpers = {};

// Create a SHA256 hash
helpers.hash = function(string) {
    if(typeof(string) == 'string' && string.length > 0) {
        let hash = crypto.createHmac('sha256',config.hashingSecret).update(string).digest('hex');
        return hash;
    } else {
        return false;
    }
};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(string) {
    try {
        let obj = JSON.parse(string);
        return obj;
    } catch(e) {
        return {}
    }
}

// Create a string of random alphanumeric characters of a given length
helpers.createRandomString = function(strLength){
    strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
    console.log(strLength)
    if(strLength){
        // Define all the possible characters that could go into a string
        var possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // Start the final string
        var str = '';

        for(i = 1; i <= strLength; i++) {
            // Get a random character from the possibleCharacters string
            let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            // Append this character to the final string
            str+=randomCharacter;
        }
        console.log(str.length)
        // Return the final string
        return str;
    } else {
        return false;
    }
}

// Export the module
module.exports = helpers;