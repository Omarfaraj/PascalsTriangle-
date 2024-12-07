function generatePascalsTriangle(rows) {
    let triangle = [[1]];

    for (let i = 1; i < rows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1];

        for(let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1);
        triangle.push(newRow);
    }

    triangle.forEach(row => console.log(row.join(' ')));
}

generatePascalsTriangle(6)