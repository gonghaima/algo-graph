// time 50.60%, 20.69%
export default paths => {
    const seen = new Set(paths.map(el => el[0]))
    for (let i of paths) {
        if (!seen.has(i[1]))
            return i[1]
    }
    return ''
};