/**
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements, and swaps them if they are in the wrong order. 
 * The process is repeated until the list is sorted.
 * Time Complexity:
 * Best Case: O(n) — When the array is already sorted (with the optimization).
 * Worst Case: O(n²) — When the array is sorted in reverse order.
 * Average Case: O(n²) — Generally, bubble sort has poor performance on average.
 * Space Complexity:
 * Space Complexity: O(1) — Bubble sort is an in-place sorting algorithm, meaning it requires a constant amount of extra space.
 */
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

