# modules

Create a `index.js` and `app.js` and run it with node REPL

```
node app.js

# or

node app.mjs
```

## Globals

- `global`
- `__dirname`
- `__filename`
- `process`
- `module`
- `exports`
- `require`

see more glabal [here](https://nodejs.org/api/globals.html)

# Modules

Option 1 (using .js files):

```js
// index.js
const action = () => {
	console.log('hello');
};

module.exports = { action };
```

```js
// app.js
const { action } = require('./index.js');

action();
```

Option 2 (using common js with .mjs):

```js
// index.mjs
export const action = () => {
	console.log('hello');
};
```

```js
// app.mjs
import { action } from './index.mjs';

action();
```

Read more on module syntax [here](https://nodejs.org/api/packages.html)
