let fs = require("fs");
let path = require("path");

function helpFn() {
  console.log(`
    List of all valid commands:
      // fso tree "directoryPath"
      // fso organize "directoryPath"
      // fso help
    Note: if you doesn't specify a directoryPath, then fso will perform commands in the current working directory.
      `);
}

module.exports = {
  helpKey: helpFn,
};
