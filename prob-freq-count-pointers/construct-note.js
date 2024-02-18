function constructNote(message, letters) {
    // Create an object to count occurrences of each letter in letters
    const letterCounts = {};
    for (let letter of letters) {
        letterCounts[letter] = letterCounts[letter] + 1 || 1;
    }

    // Check if each letter in message can be constructed from letters
    for (let letter of message) {
        if (!letterCounts[letter] || letterCounts[letter] == 0) {
            return false;
        }
        letterCounts[letter] -= 1;
    }

    return true;
}

