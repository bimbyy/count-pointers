function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Calculate the sum of elements on the right side of the current index
        const rightSum = totalSum - leftSum - nums[i];
        
        // Check if left sum equals right sum
        if (leftSum === rightSum) {
            return i; // Return the current index as the pivot index
        }
        
        // Update the left sum for the next iteration
        leftSum += nums[i];
    }
    
    return -1; // Return -1 if no pivot index is found
}
