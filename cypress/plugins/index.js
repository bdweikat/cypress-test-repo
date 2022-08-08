/* eslint-disable @typescript-eslint/no-var-requires */

const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = (on, config) => {
    on("file:preprocessor", cypressTypeScriptPreprocessor);
};
//For Cucumber Integration
/*const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
};*/