export const containsDuplicate = (nums: number[]): boolean => {
    // Use a Set when you only care about whether a value exists (uniqueness),
    // not about storing any associated data.
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// Use a Map when you need to associate keys with specific values (key-value pairs).