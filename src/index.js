// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        return matrix.reduce((result, item, index) => {
            if (index % 2 === 0) {
                result.push(...item);
            } else {
                result.push(...item.reverse());
            }
            return result;
        }, []);
    }
    return [];
};
