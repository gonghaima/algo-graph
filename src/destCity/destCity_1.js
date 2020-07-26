// Filter paths to arrivals and destinations, then filter to the destination not found in arrivals.

// time 65.79%, space 45.69%
export default paths => {
    const arrivals = paths.map(a => a[0]);
    const destinations = paths.map(a => a[1]);
    return destinations.filter(d => arrivals.indexOf(d) === -1).join('');
};