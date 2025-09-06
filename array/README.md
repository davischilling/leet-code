# Array Algorithms - Technical Interview Prep

This folder contains implementations of common array problems frequently asked in technical interviews. Each problem is explained below, including the solution approach, time and space complexity, and key insights.

---

## 1. Remove Duplicates from Sorted Array
**File:** `remove-duplicates-from-sorted-array.ts`

**Problem:**
Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length.

**Solution:**
Use two pointers: one to iterate through the array, and another to track the position of the last unique element. When a new unique element is found, move it to the next position.

- **Time Complexity:** O(n) — Each element is visited once.
- **Space Complexity:** O(1) — In-place modification, no extra space used.

---

## 2. Best Time to Buy and Sell Stock II
**File:** `best-time-to-buy.ts`

**Problem:**
Given an array where each element is the price of a stock on a given day, find the maximum profit you can achieve. You may complete as many transactions as you like (buy/sell one share multiple times).

**Solution:**
Sum all positive differences between consecutive days. This greedy approach captures every opportunity to make a profit.

- **Time Complexity:** O(n) — Single pass through the array.
- **Space Complexity:** O(1) — Only a few variables used.

---

## 3. Rotate Array
**File:** `rotate-array.ts`

**Problem:**
Rotate an array to the right by k steps, in-place if possible.

**Solutions:**
- **Three-Reverse Method:** Reverse the whole array, then reverse the first k elements, then the rest. Efficient and in-place.
- **Extra Array:** Use an additional array to place each element in its rotated position, then copy back.
- **Cyclic Replacements:** Move elements to their new positions one cycle at a time, tracking visited indices.

- **Time Complexity:** O(n) for all methods.
- **Space Complexity:**
  - Three-Reverse & Cyclic: O(1) (in-place)
  - Extra Array: O(n) (uses extra space)

---

## 4. Contains Duplicate
**File:** `contains-duplicate.ts`

**Problem:**
Check if any value appears at least twice in the array.

**Solution:**
Use a Set to track seen values. If a value is already in the set, return true.

- **Time Complexity:** O(n) — Each element is checked once.
- **Space Complexity:** O(n) — In the worst case, all elements are unique and stored in the set.

---

## 5. Single Number
**File:** `single-number.ts`

**Problem:**
Every element appears twice except for one. Find that single one.

**Solution:**
Use XOR to cancel out pairs. XOR-ing all numbers leaves only the unique number.

- **Time Complexity:** O(n) — Single pass through the array.
- **Space Complexity:** O(1) — Only one variable used.

---

Each solution is designed to be efficient and clear, following best practices for technical interviews. For more details, see the code and comments in each file.
