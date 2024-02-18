function countPairs(arr, targetSum) {
    let count = 0;
    let seen = new Set(); // To track numbers we've seen
    let complements = new Set(); // To track complements that would form targetSum

    for (let num of arr) {
        // If the complement of the current number has already been seen,
        // it means we found a pair that sums up to targetSum
        if (complements.has(num)) {
            count++;
            // Once a pair is found, remove its complement from the set to avoid counting it twice
            complements.delete(num);
        } else {
            // Add the current number and its complement to the respective sets
            seen.add(num);
            complements.add(targetSum - num);
        }
    }

    return count;
}

