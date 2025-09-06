// export const removeDuplicates = (nums: number[]) => {
//     if (nums.length === 0) return 0;
//     let k = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums.splice(k, 1);
//             k++;
//         }
//     }
// }

export const removeDuplicates = (nums: number[]) => {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) { // Found a new unique element
            nums[k] = nums[i]; // Move unique element to the front
            k++; // Increment the count of unique elements
        }
    }
    nums.length = k; // Truncate the array to contain only unique values
}

// comparisons for loop iterations
// i = 1, k = 1, nums = [1, 1, 2, 2, 3]
// nums[1] === nums[0] -> true, do nothing
// i = 2, k = 1, nums = [1, 1, 2, 2, 3]
// nums[2] !== nums[0] -> true, nums[1] = nums[2] -> nums = [1, 2, 2, 2, 3], k = 2
// i = 3, k = 2, nums = [1, 2, 2, 2, 3]
// nums[3] === nums[1] -> true, do nothing
// i = 4, k = 2, nums = [1, 2, 2, 2, 3]
// nums[4] !== nums[1] -> true, nums[2] = nums[4] -> nums = [1, 2, 3, 2, 3], k = 3
// End of loop
// Truncate array to length k
// nums = [1, 2, 3]
// return k = 3

// Example walkthrough with input [1, 1, 2, 2, 3]
// Initial state: nums = [1, 1, 2, 2, 3], k = 1
// i = 1, k = 1
// i = 2, k = 1
// i = 3, k = 2
// i = 4, k = 3
// return 3