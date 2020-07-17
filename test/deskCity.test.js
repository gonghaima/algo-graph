import { destCity } from "../src/destCity";
const assert = require('assert');

describe('deskCity Test', () => {
    it('should return the destination for case1', () => {
        const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
        const destination = destCity(paths);
        assert.equal(destination, "Sao Paulo");
    });
});