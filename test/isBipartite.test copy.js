import assert from 'assert';
import { data } from "../src/reachableNodes/data"
import reachableNodesSolutions from "../src/reachableNodes";

describe('reachableNodes ', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(reachableNodesSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const { M, N, edges } = dataObj.inputData;
                const destination = solution(edges, M, N);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });
});