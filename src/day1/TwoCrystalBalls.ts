export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpBy = Math.floor(Math.sqrt(breaks.length));
    let i = jumpBy;
    let found = false;

    for (; i < breaks.length; i += jumpBy) {
        //use first crystal ball to find a point where it breaks
        if (breaks[i]) {
            // back up by sqrt amount and start checking incrementally
            i -= jumpBy;
            while (!breaks[i] && i < breaks.length) {
                i++;
            }
            return i;
        }
    }

    return -1;
}
