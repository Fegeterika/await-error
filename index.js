'use strict';

/**
 * This function wraps an async call, so we can mimic golang's error handling
 * @param {Promise} asyncResult Promise returned from the async function called
 */
function to(asyncResult) {
  return asyncResult.then((res) => {
    return [res, null];
  })
  .catch((err) => {
    return [null, err];
  });
}

/**
 * Outputs the stack trace to standard error and abruptly exits the process
 * @param {Error} error exception to be handled
 * @param {integer} exitCode exit code to be used
 */
function throwAndExit(error, exitCode) {
  console.error(error.stack);
  process.exit(exitCode);
}

/**
 * Outputs the stack trace to standard error and calls the callback with passed arguments
 * @param {Error} error exception to be handled
 * @param {Function} callback function that will be executed after stack trace
 * @param  {...any} args parameters to be passed to the callback function
 */
function throwAndExecute(error, callback, ...args) {
  console.error(error.stack);
  callback.apply(this, args)
}

module.exports = {
  to: to,
  throwAndExit: throwAndExit,
  throwAndExecute: throwAndExecute
}