// time 50.60%, 20.69%
export default paths => {
    const map = paths.reduce((map, [s, e]) => map.set(s, e), new Map());
    let station = paths[0][0]; // since there is only one possible route, it doesn't matter where to begin
    while (map.has(station)) {
        station = map.get(station);
    }
    return station;
};