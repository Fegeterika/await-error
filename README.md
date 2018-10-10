# await-error
A small package that provides a quick way to handle error in golang style.

## usage
```javascript
const {to, throwAndExit, throwAndExecute} = require('await-error');

async function doSomethingAsync() {
  let result, error;
  [result, error] = await to(callAsyncFunction(arg1, arg2));
  if (error) throwAndExit(error, 1);

  [result, error] = await to(anotherAsyncFunction(arg1, arg2));
  if (error) throwAndExecute(error, handleExceptionSomehow, param1, param2, param3);

  console.log('Success!');
  console.log(result);
}
```
