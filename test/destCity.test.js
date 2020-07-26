import assert from 'assert';
import { data } from "../src/destCity/data"
import destCitySolutions from "../src/destCity";

describe('deskCity ', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(destCitySolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });

});