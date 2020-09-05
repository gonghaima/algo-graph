// const split = arr => {
//     let result = [];
//     console.log(`arr is :${JSON.stringify(arr)}`);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(i);
//         let tmpArr = arr;
//         let arrToEval;

//         if (i === 0) {
//             arrToEval = tmpArr;
//         } else {
//             let headingNum = tmpArr.pop();
//             arrToEval = [headingNum].concat(tmpArr);
//         }

//         for (let idx = i; idx < arr.length; idx++) {
//             console.log(`inside of idx ${idx}`);
//             let group1 = arrToEval.slice(0, idx + 1);
//             let group2 = arrToEval.slice(idx + 1, arrToEval.length);
//             if (group1.length !== arrToEval.length && group2.length !== arrToEval.length) result.push([group1, group2]);
//         }

//     }
//     return result;
// }

// https://stackoverflow.com/questions/31702427/find-all-combinations-of-two-arrays

function clone(arr) {
    var copy = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        copy[i] = new Array();
        for (var j = 0; j < arr[i].length; j++)
            copy[i][j] = arr[i][j];
    }

    return copy;
}

function split(left, right) {
    var result = [];

    function _f(left, i) {
        if (i == right.length) {
            result.push(left);
            return;
        }

        for (var j = 0; j < left.length; j++) {
            var _left = clone(left);
            _left[j].push(right[i]);
            _f(_left, i + 1);
        }
    }

    _f(left, 0);
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
    const groups = split([[], []], nodes);

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