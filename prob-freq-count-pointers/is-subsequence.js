function isSubsequence(sub, seq) {
    let subIndex = 0;
    let seqIndex = 0;

    while (seqIndex < seq.length) {
        if (sub[subIndex] === seq[seqIndex]) {
            subIndex++;
        }
        if (subIndex === sub.length) {
            return true;
        }
        seqIndex++;
    }

    return false;
}