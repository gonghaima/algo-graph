/*
  Goal is to find edges that don't lead to a cycle.

  rank   - time stamp of your dfs traversal
  minObs - without retraversing through visited node (but you will "peek" to observe the rank of visited node)
           lowest rank observed on that path (path ends when it hits a leaf or a dead end (all children are already visited))

  You will have a cycle if a child's minObs is lower than or equal to rank (example, if child's minObs is equal to the nodes rank
  that it hit itself on the way, thus a cycle. lower minObs would mean it would eventually lead back to the node itself, so same meaning)
  
  so mark your graph with rank and along the way keep track of minObs for each node. if node.rank > child.minObs, edge between node and child
  is a bridge since that edge will never lead back to the node itself along the way.
*/

export default (n, connections) => {
    // need graph to traverse
    const graph = createGraph(n, connections);

    // so you never retraverse visited path. if child was visited and IS NOT a direct parent, you will
    // end up peeking for its value to keep track of minObs in the way
    const visited = new Set();
    let rank = 0;

    // this will be your output. if condition meets, edge will be pushed here
    const output = [];

    // dfs function in this scope so variable rank is easily updated
    function dfs(node, parent) {
        visited.add(node.val);

        // by default, minObs will be at the greatest its own rank
        node.rank = rank;
        node.minObs = rank;

        // increment rank for next nodes
        rank++;

        node.children.forEach((child) => {
            // don't revisit your parent
            if (child === parent) { return; }
            if (visited.has(child)) {
                // if node visited, just peek the value
                node.minObs = Math.min(node.minObs, graph[child].minObs);
                return;
            } else {
                // traverse and also update minObs so its parent can use it later
                node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
            }

            // condition explained in the comments above
            if (node.rank < graph[child].minObs) output.push([node.val, child]);
        });

        return node.minObs;
    };

    dfs(graph[connections[0][0]], connections[0][0]);

    return output;
};


function createGraph(n, connections) {
    const output = {};

    for (let i = 0; i < n; i++) {
        output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
    }

    connections.forEach((connection) => {
        output[connection[0]].children.push(connection[1]);
        output[connection[1]].children.push(connection[0]);
    });

    return output;
}