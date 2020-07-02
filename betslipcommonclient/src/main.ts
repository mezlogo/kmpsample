import { betslipcommon } from 'betslipcommon';

console.log(betslipcommon);

const myTsCallback = { onCall: (inputMsg: string) => `callback from TS. inputMsg: ${inputMsg}` };
const response = betslipcommon.commonCode(myTsCallback);

console.log(response);
console.log(response.toString());