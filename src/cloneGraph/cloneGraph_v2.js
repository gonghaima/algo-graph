function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
* @param {Node} node
* @return {Node}
*/
const cloneGraph = function (node, hash={}) {
    if (!node) return node;
    if (!hash[node.val]) {
        hash[node.val] = new Node(node.val);
        hash[node.val].neighbors = node.neighbors.map(n => cloneGraph(n, hash));
    }
    return hash[node.val];
};

export default cloneGraph;