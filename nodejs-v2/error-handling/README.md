# error handling

The last thing you want is your entire server crashing because of an error. It's your choice if that's what you want. Regardless, you are better off if you hanlde those errors.

## Process exiting

When exception is thrown in Node.js, the current process will exit with a code of `1`. This stops your program completely. You can also manually do it:

```js
process.exit(1);
```

You shouldn't do this, although it works, it offers no chnace to handle those errors.

## Async Errors

When dealing with callbacks that are used for async operations, the standard patterns is:

```js
fs.readFile(filePath, (error, result) => {
	if (error) {
		// do something
	} else {
		// yay
	}
});
```

callbacks accept `(error, result)` argument signature tuple where error could be `null`.

for `promises`, you can continue to use `.catch()` pattern.

for `async / await` you should use `try / catch`

```js
try {
	const result = await asyncAction();
} catch (e) {
	// handle error
}
```

## Sync errors

for sync errors, `try / catch` works just fine, just like async await

```js
try {
	const result = syncAction();
} catch (e) {
	// handle error
}
```

## Catch all

finally, if you can't catch those pesky errors for any reason. Maybe some lib is throwing them and you can't catch them. You can use:

```js
process.on('uncaughtException', cb);
```
