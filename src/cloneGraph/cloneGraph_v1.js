function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
* @param {Node} node
* @return {Node}
*/
const cloneGraph = function (node) {
    const map = new Map();

    const dfs = node => {
        if (!node) return null;
        let newNode = new Node(node.val);
        if (map.has(node)) newNode = node;
        map.set(node, newNode)
        for (const next of node.neighbors) {
            newNode.neighbors.push(map.get(next) || dfs(next));
        }
        return newNode;
    }

    return dfs(node);
};

export default cloneGraph;