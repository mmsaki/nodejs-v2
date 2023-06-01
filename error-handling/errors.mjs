import { readFile } from 'fs';
import { readFile as readFile2 } from 'fs/promises';

// callback //
readFile(new URL('app.mjs', import.meta.url), 'utf-8', (err, data) => {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});

// try catch promises (await with try / catch) //
try {
	const result = await readFile2(new URL('app.mjs', import.meta.url), 'utf-8');
} catch (e) {
	console.error(e);
	console.log('hello');
}

// example 2 (returns promise and you don't await) //
let result = readFile2(new URL('app.mjs', import.meta.url), 'utf-8').catch(
	(e) => {
		console.log(e);
	}
);

// catch all (last resort whent you don't catch an error) - put this at the top //
process.on('uncaughtException', (e) => {
	console.log(e);
});
