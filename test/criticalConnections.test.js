import assert from 'assert';
import { data } from "../src/criticalConnections/data"
import criticalConnectionsSolutions from "../src/criticalConnections";

describe('criticalConnections', () => {

    data.map((dataObj, dataIdx) => {
        Object.values(criticalConnectionsSolutions).map((solution, solutionIdx) => {
            it(`solutions ${solutionIdx} should return expect results for data ${dataIdx}`, () => {
                const destination = solution(dataObj.inputData.n, dataObj.inputData.connections);
                assert.equal(destination[0][0], dataObj.expectedResult[0][0]);
                assert.equal(destination[0][1], dataObj.expectedResult[0][1]);
            });
        });
    });
});