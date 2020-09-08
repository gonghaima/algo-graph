/*******************************************************************
 * Since we know this rule.Now we have to do the following steps:  *
 *                                                                 *
 * Is it only one island ?                                         *
 *     Yes : Go next Step                                          *
 * No: return 0                                                    *
 * In the step 1, you can check which land connect 2 lands at most *
 * If connect 1 land, return 1                                     *
 * If connect 2 lands, it is critical point                        *
 * Check every case by converting critical point to 0              *
 *******************************************************************/


const markIsland = (x, y, checked, grid, bridges = []) => {
    let land = 0;
    const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    checked[x][y] = true;
    let newi, newj;

    for (let move of moves) {
        let i = x + move[0],
            j = y + move[1];

        if (0 <= i && i < grid.length && 0 <= j && j < grid[0].length && grid[i][j] == 1) {
            land++;
            if (checked[i][j] == false)
                markIsland(i, j, checked, grid, bridges);
            if (land == 1) {
                newi = i;
                newj = j;
            }
        }
    }
    if (land == 2)
        bridges.push([x, y]);

    // If connect 2 lands, it is critical point 
    if (land == 1)
        bridges.push([newi, newj]);
}

const isOneIsland = (grid, bridges) => {
    const checked = [...Array(grid.length)].map(() => new Array(grid[0].length).fill(false));
    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!checked[i][j] && grid[i][j] == 1) {
                islandCount++;
                markIsland(i, j, checked, grid, bridges);
            }
        }
    }

    return islandCount;
}

export default (grid) => {

    // Edge case: if only one island, return 1;
    const total = grid.reduce((itr, arr) => {
        const cTotal = arr.reduce((iterator, val) => {
            return iterator + val;
        }, 0);
        return itr + cTotal;
    }, 0);
    if (total === 1) return 1;

    // Normal case: 
    let bridges = [];
    let islandCount = isOneIsland(grid, bridges);

    // Is it only one island ?  
    if (islandCount !== 1) // more than 1 island, so return 0
        return 0;


    // Yes: only one island, Go next Step
    for (let [x, y] of bridges) {
        grid[x][y] = 0;  // Check every case by converting critical point to 0
        if (isOneIsland(grid) !== 1) {
            return 1;
        }
        grid[x][y] = 1;
    }

    return 2;
};