import { destCity } from "../src/destCity";
const assert = require('assert');

describe('deskCity Test', () => {
    it('should return the destination for case1', () => {
        const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
        const destination = destCity(paths);
        assert.equal(destination, "Sao Paulo");
    });
    it('should return the destination for case2', () => {
        const paths = [["B", "C"], ["D", "B"], ["C", "A"]];
        const destination = destCity(paths);
        assert.equal(destination, "A");
    });
    it('should return the destination for case3', () => {
        const paths = [["A", "Z"]];
        const destination = destCity(paths);
        assert.equal(destination, "Z");
    });
});