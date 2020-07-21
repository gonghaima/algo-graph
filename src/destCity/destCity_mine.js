export default paths => {
    const visited = new Set();
    let next = paths;
    visited.add(paths[0]);
    let dest = paths[0][1];

    while (next.length > 0) {
        let toBeVisited = [];
        next.map(path => {
            if (!visited.has(path)) {
                if (path[0] === dest) {
                    dest = path[1];
                    visited.add(path);
                } else {
                    toBeVisited.push(path);
                }
            }
        })
        next = toBeVisited;
    }
    return dest;
};