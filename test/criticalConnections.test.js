import assert from 'assert';
import { data } from "../src/criticalConnections/data"
import criticalConnectionsSolutions from "../src/criticalConnections";

describe('criticalConnections', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(criticalConnectionsSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData.n, dataObj.inputData.connections);
                assert.equal(destination, dataObj.expectedResult);
            });
        });
    });
});