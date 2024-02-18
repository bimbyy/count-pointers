function separatePositive(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // If the start is positive, just move the start pointer to the right
        if (arr[start] > 0) {
            start++;
        // If the end is negative, just move the end pointer to the left
        } else if (arr[end] < 0) {
            end--;
        // When start is negative and end is positive, swap them
        } else {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    return arr;
}

