# testing

nodejs comes with an `assert` module

```zsh
node lib.spec.mjs
```

stdout

```zsh
add()
Shpuld add two numbers
FAIL
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

2 !== 3

    at file:///Users/meekmsaki/dev/frontend-masters/nodejs-v2/testing/lib.spec.mjs:6:9
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 2,
  expected: 3,
  operator: 'strictEqual'

```
