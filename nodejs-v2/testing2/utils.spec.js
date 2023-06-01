const { mapObjectToArray, getNewUser } = require('./utils');

describe('getNewUser', () => {
	test('it gets user', async () => {
		const user = await getNewUser(1);

		expect(user).toBeTruthy();
		expect(user.verified).toBe(false);
	});
	test('user does not exist', async () => {
		expect.assertions(1);

		try {
			await getNewUser(3);
		} catch (e) {
			expect(e.message).toBe('User does not exist');
		}
	});
});

describe('mapObjectToArray', () => {
	test('should map values to array using callback', () => {
		const result = mapObjectToArray({ age: 30, height: 65 }, (k, v) => {
			return v + 10;
		});

		expect(result).toEqual([40, 75]);
	});

	// ensure callback gets called
	test('callback get called', () => {
		const mockCb = jest.fn();
		const result = mapObjectToArray({ age: 30, height: 65 }, mockCb);

		expect(mockCb.mock.calls.length).toBe(2);
	});
});
