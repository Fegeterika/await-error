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