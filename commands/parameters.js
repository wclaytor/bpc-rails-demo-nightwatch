/* eslint-disable func-names, prefer-arrow-callback */
const { default: keyFileStorage } = require('key-file-storage');

const storage = keyFileStorage('parameters', false);

// parameterization using key-file-storage
exports.command = async function parameters(name, value, callback) {
  this.execute(function () {});
  if (value == null) {
    const output = await storage(name);

    if (callback) {
      callback(output);
    }

    return output;
  }

  const output = storage(name, value);
  return output;
};
