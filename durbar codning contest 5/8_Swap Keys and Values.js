function swapKeysAndValues(obj) {
    const swappedObj = {};
    
    for (const [key, value] of Object.entries(obj)) {

        swappedObj[String(value)] = key;
    }
    
    return swappedObj;
}