export default paths => {
    const visited = new Set();
    let next = paths;
    visited.add(paths[0]);
    let destination = paths[0][1];
    const dfs = (node, checked) => {
        const next = (paths.filter(([s, e]) => node[1] === s))[0];
        if (next && !checked.has(next)) {
            checked.add(next);
            destination = next[1];
            dfs(next, checked);
        }
    };

    dfs(paths[0], visited);

    return destination;
};