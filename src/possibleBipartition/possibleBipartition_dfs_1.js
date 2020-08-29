export default (N, dislikes) => {
    if (!dislikes.length) return true;

    const colors = Array(N + 1).fill(0);
    const graph = {};

    for (let [a, b] of dislikes) {
        graph[a] = (graph[a] || new Set()).add(b);
        graph[b] = (graph[b] || new Set()).add(a);
    }

    for (let i = 1; i <= N; i++) {
        if (!colors[i] && !dfs(i, 1)) return false;
    }

    return true;

    function dfs(idx, color) {
        if (colors[idx]) return color === colors[idx];
        if (!graph[idx]) return true;
        colors[idx] = color;

        for (let vertex of graph[idx]) {
            if (!dfs(vertex, -color)) return false;
        }
        return true;
    }
};