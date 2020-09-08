import assert from 'assert';
import { data } from "../src/minDays/data"
import minDaysSolutions from "../src/minDays";

describe('minDays', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(minDaysSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });
});