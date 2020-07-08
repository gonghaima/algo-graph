import cloneGraph from "../src/cloneGraph/cloneGraph_mine";
const assert = require('assert');

function Node(val, neighbors) {
    const newNode = {};
    newNode['val'] = val;
    newNode['neighbors'] = neighbors || [];
    return newNode;
    // this.val = val === undefined ? 0 : val;
    // this.neighbors = neighbors === undefined ? [] : neighbors;
};


const adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]

const node1 = Node(1);
const node2 = Node(2);
const node3 = Node(3);
const node4 = Node(4);

console.log("======");
console.log(node1);
console.log("======");



node1.neighbors.push(node2)
node1.neighbors.push(node4)

node2.neighbors.push(node1)
node2.neighbors.push(node3)

node3.neighbors.push(node2)
node3.neighbors.push(node4)

node4.neighbors.push(node1)
node4.neighbors.push(node3)

describe('cloneGraph Test', () => {
    it('should return cloned node for case1', () => {
        const cloned = cloneGraph(node1);
        assert.equal(cloned.val, 1);
        assert.equal(cloned.neighbors[0].val, 2);
    });
});

// const nodeMap = new Map();
// const addNodes = (nodeMap, neighborsArr) => {
//     neighborsArr.map((neighbors, idx) => {
//         nodeMap.set(idx, neighbors);
//     })
// }

// export const Node = { // does not create a new scope
//     val: 0,
//     neighbors: [],
//     addNeighbor: function (node) {
//         this.neighbors.push(node);
//     }
// }