The goal is showing how to compile common code for both server and browser sides using kotlin/multiplatform framework `1.4-M2` which can generate `.d.ts` files for javascript platform.

Steps:
- build common module: `sh -c "cd betslipcommon && gradle clean build && cp betslipcommon.d.ts build/js/packages/betslipcommon/kotlin"`
- build client module: `sh -c "cd betslipcommonclient && ./install.sh"`
- run nodejs: `sh -c "cd betslipcommonclient && node dist/bundle.js"`

Output:
```
{
  ResponseDataClass: [Function: ResponseDataClass] {
    '$metadata$': { simpleName: 'ResponseDataClass', kind: 'class', interfaces: [] }
  },
  commonCode: [Function: commonCode]
}
ResponseDataClass {
  _msg: 'callback from TS. inputMsg: fromCommon',
  _code: 2
}
ResponseDataClass(msg=callback from TS. inputMsg: fromCommon, code=2)
```