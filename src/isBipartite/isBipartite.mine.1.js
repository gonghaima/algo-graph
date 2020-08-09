// https://stackoverflow.com/questions/31702427/find-all-combinations-of-two-arrays

function combine(left, right) {

    function carry() {
        return c.reduceRight(function (r, _, i, o) {
            return r && !(o[i] = (o[i] + 1) % left.length);
        }, 1);
    }

    var c = Array.apply(null, { length: right.length }).map(function () { return 0; }),
        result = [];

    do {
        result.push(c.reduce(function (r, a, i) {
            r[left[a]].push(right[i]);
            return r;
        }, left.reduce(function (r, a) {
            r[a] = [];
            return r;
        }, {})));
    } while (!carry());
    return result;
}


export default graph => {
    let isBipartite = false;

    const lg = graph.length;
    const nodes = [];
    for (let i = 0; i < lg; i++) {
        nodes.push(i);
    }

    // get all possible two groups
    const groupsRaw = combine(["A", "B"], nodes);
    const groups = groupsRaw.map(item => {
        return [item.A, item.B];
    })

    // return groups;

    // confirm each edge can reach two groups
    // get each groups
    for (let i = 0; i < groups.length && isBipartite === false; i++) {
        let cB = true;
        const [s, e] = groups[i];

        // check if every edge is included in the group
        for (let graphIdx = 0; graphIdx < graph.length && cB; graphIdx++) {
            const edgeList = graph[graphIdx];
            // let isB = true;
            for (let edIdx = 0; edIdx < edgeList.length; edIdx++) {
                const edgeEnd = edgeList[edIdx];
                // [idx, edgeEnd]
                let y = s.includes(graphIdx) && e.includes(edgeEnd) || s.includes(edgeEnd) && e.includes(graphIdx);
                if (y === false) {
                    debugger;
                    cB = false;
                }
            }
        }
        if (cB) isBipartite = true;
    }

    return isBipartite;
};