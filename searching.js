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
 * Pros and Cons:
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
