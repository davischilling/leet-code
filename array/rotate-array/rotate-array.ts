// Optimal, O(1) space
export const rotateThreeReverse = (nums: number[], k: number): void => {
    const n = nums.length;
    // A modulo is a mathematical operation that finds the remainder after dividing one number by another
    const rotateBy = k % n; // ensures that the number of rotation steps does not exceed the array's length
    if (rotateBy === 0 || n <= 1) return;

    // This function reverses a portion of the array nums
    // in place between the indices start and end (inclusive).
    const reverse = (start: number, end: number) => {
        // set up two pointers at the start and end of the segment to reverse.
        let left = start;
        let right = end;
        while (left < right) {
            // swaps the values at positions left and right in the
            // nums array using array destructuring assignment
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    // You reverse three times to rotate the array
    // in-place and put the last k elements at the front,
    // while keeping their order correct
    reverse(0, n - 1);
    reverse(0, rotateBy - 1);
    reverse(rotateBy, n - 1);
};

// O(n) space
export const rotateExtraArray = (nums: number[], k: number): void => {
    const n = nums.length;
    const rotateBy = k % n;
    if (rotateBy === 0 || n <= 1) return;

    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        // i is the current index in the original array.
        // rotateBy is the number of steps to rotate.
        // (i + rotateBy) % n calculates the new index for nums[i]
        // after rotation, wrapping around if it goes past the end of the array (using modulo).
        // rotated[...] = nums[i] assigns the value to its new position.
        rotated[(i + rotateBy) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

// O(1) space, O(n) time
export const rotateCyclicReplacements = (nums: number[], k: number): void => {
    const n = nums.length;
    const rotateBy = k % n;
    if (rotateBy === 0 || n <= 1) return;

    let count = 0;
    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + rotateBy) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }
};