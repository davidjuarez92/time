const map = [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '.', '.'],
];

const way = (maxSteps) => {
    let line = 0;
    let steps = 0;
    let response = 'NO';
    for (let index = 0; index < maxSteps + 1; index++) {
        if (line + 1 > map.length) {
            return 'NO';
        }
        const char = map[line][steps];
        // console.log(`[${line}][${steps}]`, char);

        if (char == '#') {
            maxSteps++;
        }

        if (line == 2 && steps == 2) {
            response = 'YES';
        }

        if (steps + 1 == map[line].length) {
            line++;
            steps = 0;
        } else {
            steps++;
        }
    }


    return response;
}

console.log('Is possible:', way(20));