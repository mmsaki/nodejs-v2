import { add } from './lib.mjs';
import assert from 'assert';

console.log('add()\nShpuld add two numbers');
try {
	assert.strictEqual(add(1, 2), 3);
	console.log('SUCCESS');
} catch (e) {
	console.log('FAIL');
	console.error(e);
}
