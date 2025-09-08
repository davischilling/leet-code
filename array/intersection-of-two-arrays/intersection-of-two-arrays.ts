// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

export const intersect = (nums1: number[], nums2: number[]): number[] => {
    if (nums1.length === 0 || nums2.length === 0) return [];

    const intersection = new Map<number, number>();
    for (let i = 0; nums1.length > i; i++){
        for (let k = 0; nums2.length > k; k++){
            if (nums1[i] === nums2[k] && !intersection.has(k)){
                intersection.set(k, nums1[i]);
            }
        }
    }
    return Array.from(intersection.values());
};

export const intersect2 = (nums1: number[], nums2: number[]): number[] => {
    if (nums1.length === 0 || nums2.length === 0) return [];

    // Create frequency map for the smaller array for better space efficiency
    const [smaller, larger] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];
    
    // Count frequency of each number in the smaller array
    const frequencyMap = new Map<number, number>();
    for (const num of smaller) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    const result: number[] = [];
    
    // Iterate through the larger array and find intersections
    for (const num of larger) {
        const count = frequencyMap.get(num);
        if (count && count > 0) {
            result.push(num);
            frequencyMap.set(num, count - 1);
        }
    }
    
    return result;
};

// Optimized for sorted arrays - Two pointer approach
export const intersectSorted = (nums1: number[], nums2: number[]): number[] => {
    const result: number[] = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
};

// Optimized when nums1 is much smaller than nums2
export const intersectSmallLarge = (nums1: number[], nums2: number[]): number[] => {
    // Use frequency map approach (optimized for small nums1)
    const frequencyMap = new Map<number, number>();
    for (const num of nums1) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    const result: number[] = [];
    for (const num of nums2) {
        const count = frequencyMap.get(num);
        if (count && count > 0) {
            result.push(num);
            frequencyMap.set(num, count - 1);
        }
    }
    
    return result;
};

// For memory-constrained scenario with nums2 on disk
export const intersectMemoryConstrained = (nums1: number[], getNextChunk: () => number[] | null): number[] => {
    // Create frequency map for nums1 (in memory)
    const frequencyMap = new Map<number, number>();
    for (const num of nums1) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    const result: number[] = [];
    
    // Process nums2 in chunks from disk
    let chunk = getNextChunk();
    while (chunk !== null) {
        for (const num of chunk) {
            const count = frequencyMap.get(num);
            if (count && count > 0) {
                result.push(num);
                frequencyMap.set(num, count - 1);
            }
        }
        chunk = getNextChunk();
    }
    
    return result;
};

// Example implementation of getNextChunk for demonstration
export const createChunkReader = (nums2: number[], chunkSize: number = 1000) => {
    let currentIndex = 0;
    
    return (): number[] | null => {
        if (currentIndex >= nums2.length) {
            return null; // No more chunks
        }
        
        const chunk = nums2.slice(currentIndex, currentIndex + chunkSize);
        currentIndex += chunkSize;
        return chunk;
    };
};

// Example usage of the memory-constrained intersection
export const exampleUsage = () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2, 3, 4, 5, 2, 1, 6, 7, 8]; // Imagine this is on disk
    
    // Create a chunk reader that reads 3 elements at a time
    const getNextChunk = createChunkReader(nums2, 3);
    
    // Use the memory-constrained intersection
    const result = intersectMemoryConstrained(nums1, getNextChunk);
    console.log(result); // [2, 2, 1]
    
    return result;
};