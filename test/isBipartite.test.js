import assert from 'assert';
import { data } from "../src/isBipartite/data"
import isBipartiteSolutions from "../src/isBipartite";

describe('isBipartite ', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(isBipartiteSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });
});