export default (N, dislikes) => {
    if (!dislikes.length) return true;
    const colors = new Map();
    const stack = [];
    const graph = {};
    for (let [a, b] of dislikes) {
        graph[a] = (graph[a] || new Set()).add(b);
        graph[b] = (graph[b] || new Set()).add(a);
    }

    for (let i = 1; i <= N; i++) {

        if (colors.has(i)) continue;

        colors.set(i, true);
        stack.push(i);

        while (stack.length > 0) {
            let current = stack.pop();

            if (!graph[current]) return true;
            for (let neighbour of graph[current]) {
                if (colors.get(neighbour) === colors.get(current)) return false;
                if (!colors.has(neighbour)) {
                    colors.set(neighbour, !colors.get(current));
                    stack.push(neighbour);
                }
            }
        }
    }
    return true;
};