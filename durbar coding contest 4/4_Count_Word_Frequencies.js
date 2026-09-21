function countWordFrequencies(sentence) {
    const splitedSentence = sentence
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter(word => word !== "");

    const result = {};

    for (let i = 0; i < splitedSentence.length; i++) {
        const word = splitedSentence[i];

        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    return result;
}
console.log(countWordFrequencies("Hello world, hello!"))