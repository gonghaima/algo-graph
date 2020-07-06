function createNode(val, neighbors) {
    const newNode = {};
    newNode['val'] = val;
    newNode['neighbors'] = neighbors || [];
    return newNode;
};

/********************************************
 *  steps                                   *
 *                                          
 *  create a node map                   
 *                                          *
 *  create a relation list             
 *                                          *
 *  loop add relation list to node map 
 * 
 *  return first node                       *
 ********************************************/

export const cloneGraph = (node) => {
    // create a node map
    const cloneMap = new Map();

    // create a relation map
    const relationMap = new Map();
    const dfs = (start, visited = new Set()) => {
        // validate - if no val, just return
        if (!start || !start.val) return;

        visited.add(start.val)
        cloneMap.set(start.val, createNode(start.val))

        const neighbors = start.neighbors;
        neighbors.map(neighbor => {
            const nbs = relationMap.get(start.val) || [];
            nbs.push(neighbor.val);
            relationMap.set(start.val, nbs);
            if (!visited.has(neighbor.val)) {
                dfs(neighbor, visited)
            }
        })
    }

    dfs(node);

    for (const [key, nbs] of relationMap.entries()) {
        const curNode = cloneMap.get(key);
        nbs.map(k => {
            curNode.neighbors.push(cloneMap.get(k));
        });
    }
    //edge case, check if exist first
    const fistClonedNode = node && node.val ? cloneMap.get(node.val) : node;
    return fistClonedNode;
};