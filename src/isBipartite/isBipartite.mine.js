
// export default graph => {
//     const numOfNodes = graph.length;
//     for (let idx = 0; idx < numOfNodes; idx++) {
//         for (let i = idx + 1; i < numOfNodes; i++) {
//             //graph[idx]  graph[i]
//         }
//     }
//     return true;
// };


// const takeAllPossibleCombination = (data, numToTake)=>{
// // [{wanted:[],rest:[]}]

// }


// const splitToTwoGroups = (data) => {
//     // data =  [1,2,3,4,5,6,7]
//     // [{wanted:[],rest:[]}]
//     const cnt = data.length;
//     for (let index = 0; index < cnt; index++) {
//         const element = array[index];
//         // all possibilities for data[index]
//     }

// }


// export default graph => {
//     const numOfNodes = graph.length;
//     const lpCount = Math.ceil(numOfNodes / 2);
//     for (let idx = 1; idx < lpCount; idx++) {
//         for (let i = idx + 1; i < numOfNodes; i++) {
//             //graph[idx]  graph[i]
//         }
//     }
//     return true;
// };



const split = arr => {
    let result = [];
    console.log(`arr is :${JSON.stringify(arr)}`);
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        let tmpArr = arr;
        let arrToEval;
        // console.log(`in loop now`);
        // console.log(tmpArr);
        // console.log(`after tmpArr`);

        if (i === 0) {
            arrToEval = tmpArr;
        } else {
            let headingNum = tmpArr.pop();
            arrToEval = [headingNum].concat(tmpArr);
        }

        for (let idx = i; idx < arr.length; idx++) {
            console.log(`inside of idx ${idx}`);
            let group1 = arrToEval.slice(0, idx + 1);
            let group2 = arrToEval.slice(idx + 1, arrToEval.length);
            if (group1.length !== arrToEval.length && group2.length !== arrToEval.length)result.push([group1, group2]);
        }

    }
    return result;
}

export default graph => {
    const lg = graph.length;
    const nodes = [];
    for (let i = 0; i < lg; i++) {
        nodes.push(i);
    }
    const groups = split(nodes);
    return groups;
};