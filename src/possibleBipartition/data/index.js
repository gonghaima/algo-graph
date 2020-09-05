export const data = [
    {
        inputData: { N: 4, dislikes: [[1, 2], [1, 3], [2, 4]] },
        expectedResult: true
    },
    {
        inputData: { N: 3, dislikes: [[1, 2], [1, 3], [2, 3]] },
        expectedResult: false
    },
    {
        inputData: { N: 5, dislikes: [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]] },
        expectedResult: false
    },
    {
        inputData: { N: 10, dislikes: [[1, 2], [3, 4], [5, 6], [6, 7], [8, 9], [7, 8]] },
        expectedResult: true
    }
]
