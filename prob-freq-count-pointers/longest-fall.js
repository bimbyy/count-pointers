function longestFall(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0
    
    let maxLength = 1; // Minimum length is 1 because a single element is considered a sequence
    let currentLength = 1; // Start with the first element
    
    for (let i = 1; i < nums.length; i++) {
        // If the current element is less than the previous one, increment the current sequence length
        if (nums[i] < nums[i - 1]) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength); // Update the maximum length if necessary
        } else {
            // If the sequence doesn't decrease, reset the current length to 1
            currentLength = 1;
        }
    }
    
    return maxLength; // Return the maximum length found
}


