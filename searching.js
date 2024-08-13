/** 
 * Time Complexity:
 * Best Case: O(1) — The target element is the first element in the array.
 * Worst Case: O(n) — The target element is at the end of the array, or it is not present.
 * Average Case: O(n) — On average, the target is somewhere in the middle of the array.
 * 
 * Space Complexity:
 * Space Complexity: O(1) — Linear search requires a constant amount of extra space, regardless of the input size.
 * 
 * Use Cases of Linear Search:
 * Unsorted Arrays: Linear search is the simplest and often the only option when dealing with unsorted arrays.
 * Small Data Sets: When the array or list is small, linear search can be effective because of its simplicity.
 * Finding the First Occurrence: Linear search can easily be adapted to find the first occurrence 
 * of an element in cases where the array may contain duplicates.
 * 
 * Pros:
 * Simple and easy to understand.
 * Does not require the array to be sorted.
 * Works on any list structure (e.g., arrays, linked lists).
 * Cons:
 * Inefficient for large data sets due to its linear time complexity.
 * Not suitable when faster search algorithms (like binary search) can be used on sorted arrays.
 **/
const linearSearch = (array, target) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return array[index];
        }
    }
    return -1; //Target not found, return -1
}


/** 
 * Time Complexity:
 * Best Case: O(1) — The target element is at the middle of the array.
 * Worst Case: O(log n) — The target element is at the end of the array, or it is not present.
 * Average Case: O(log n) — The search space is halved at each step.
 * Space Complexity:
 * Space Complexity: O(1) — Binary search requires a constant amount of extra space.
 * Use Cases of Binary Search:
 * Sorted Arrays: Binary search is optimal for searching in sorted arrays.
 * Efficient Searches: When the dataset is large, binary search is significantly faster than linear search.
 * 
 * Pros:
 * Much more efficient than linear search for large datasets.
 * Simple to implement when the array is sorted.
 * Cons:
 * Requires a sorted array. Sorting the array first might reduce its effectiveness for dynamic data.
 * More complex than linear search.
 **/
const binarySearch = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (target == array[mid]) {
            return array[mid];
        } else if (target < array[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1; //Target not found, return -1
}
