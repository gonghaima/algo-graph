import { destCity_mine_bfs, destCity_mine_dfs } from "../src/destCity";
const assert = require('assert');

describe('deskCity Test - mine bfs', () => {
    it('should return the destination for case1', () => {
        const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
        const destination = destCity_mine_bfs(paths);
        assert.equal(destination, "Sao Paulo");
    });
    it('should return the destination for case2', () => {
        const paths = [["B", "C"], ["D", "B"], ["C", "A"]];
        const destination = destCity_mine_bfs(paths);
        assert.equal(destination, "A");
    });
    it('should return the destination for case3', () => {
        const paths = [["A", "Z"]];
        const destination = destCity_mine_bfs(paths);
        assert.equal(destination, "Z");
    });
    it('should return the destination for case4', () => {
        const paths = [["B", "C"], ["D", "B"], ["C", "A"]];
        const destination = destCity_mine_bfs(paths);
        assert.equal(destination, "A");
    });
});

describe('deskCity Test - mine dfs', () => {
    it('should return the destination for case1', () => {
        const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
        const destination = destCity_mine_dfs(paths);
        assert.equal(destination, "Sao Paulo");
    });
    it('should return the destination for case2', () => {
        const paths = [["B", "C"], ["D", "B"], ["C", "A"]];
        const destination = destCity_mine_dfs(paths);
        assert.equal(destination, "A");
    });
    it('should return the destination for case3', () => {
        const paths = [["A", "Z"]];
        const destination = destCity_mine_dfs(paths);
        assert.equal(destination, "Z");
    });
    it('should return the destination for case4', () => {
        const paths = [["B", "C"], ["D", "B"], ["C", "A"]];
        const destination = destCity_mine_dfs(paths);
        assert.equal(destination, "A");
    });
});