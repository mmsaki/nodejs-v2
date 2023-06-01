# testing with jest

Install jest:

```zsh
npm install jest --save-dev
```

## Run test

To run tests:

```zsh
npm test
```

expected stdout

```zsh
 testing2 git:(main) ✗ npm test

> testing2@1.0.0 test
> jest

 PASS  ./utils.spec.js
  getNewUser
    ✓ it gets user (103 ms)
    ✓ user does not exist (102 ms)
  mapObjectToArray
    ✓ should map values to array using callback (2 ms)
    ✓ callback get called (2 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.721 s, estimated 1 s
Ran all test suites.
```
