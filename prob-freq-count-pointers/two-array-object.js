function twoArrayObject(keys, values) {
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        // Assign the value to the key if it exists, otherwise assign null
        result[keys[i]] = i < values.length ? values[i] : null;
    }
    return result;
}

