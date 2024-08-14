const bubbleSort = (array) => {
    let length = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        length--; ``
    } while (swapped);
    return array;
}

const sorted = bubbleSort([3, 6, 2, 4])
console.log(sorted);
