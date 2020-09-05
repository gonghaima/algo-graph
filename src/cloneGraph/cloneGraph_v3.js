/**************************
 * BFS                    *
 *                        *
 * Time complexity: O(N)  *
 * Space complexity: O(N) *
 **************************/

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
* @param {Node} node
* @return {Node}
*/
const cloneGraph = node => {
    const bfs = (node, queue, visited, i) => {
        visited[node.val] = new Node(node.val)
        while (i < queue.length) {
            const curr = queue[i++];
            curr.neighbors.forEach(neighbor => {
                if (visited[neighbor.val] === undefined) {
                    queue.push(neighbor);
                    visited[neighbor.val] = new Node(neighbor.val);
                }
                visited[curr.val].neighbors.push(visited[neighbor.val]);
            })
        }
        return visited[node.val];
    }
    return node ? bfs(node, [node], {}, 0) : node;
};

export default cloneGraph;