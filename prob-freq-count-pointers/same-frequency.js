function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    
    // Check if both numbers have the same number of digits
    if (strNum1.length !== strNum2.length) {
        return false;
    }
    
    const countDigits = {};
    
    // Count the frequency of each digit in the first number
    for (let digit of strNum1) {
        countDigits[digit] = (countDigits[digit] || 0) + 1;
    }
    
    // Decrement the frequency based on the second number's digits
    for (let digit of strNum2) {
        if (!countDigits[digit]) {
            return false;
        }
        countDigits[digit] -= 1;
    }
    
    return true;
}
