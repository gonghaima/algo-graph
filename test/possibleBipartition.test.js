import assert from 'assert';
import { data } from "../src/possibleBipartition/data"
import possibleBipartitionSolutions from "../src/possibleBipartition";

describe('possibleBipartition ', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(possibleBipartitionSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData.N, dataObj.inputData.dislikes);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });
});