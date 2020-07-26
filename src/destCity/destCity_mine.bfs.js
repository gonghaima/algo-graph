// time 47.34% space 18.78%

export default paths => {
    const visited = new Set();
    let next = paths;
    visited.add(paths[0]);
    let dest = paths[0][1];
    let keepChecking = true;

    while (next.length > 0 && keepChecking) {
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
        if (next.length === toBeVisited.length) keepChecking = false;
        next = toBeVisited;
    }
    return dest;
};