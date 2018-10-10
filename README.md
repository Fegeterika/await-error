# await-to-wrapper
A very simple wrapper for javascript async/await to mimic go's error handling.  
Inspired by https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/

## usage
```javascript
const to = require('await-to-wrapper');

async function doSomethingAsync() {
  let [result, error] = await to(callAsyncFunction(arg1, arg2));
  if (error) throw error;

  console.log(result);
}
```
