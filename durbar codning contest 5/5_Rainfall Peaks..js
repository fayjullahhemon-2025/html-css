function findRainfallPeaks(rainfall) {
    const peaks = [];
    

    if (rainfall.length < 3) {
        return peaks;
    }
    
    for (let i = 1; i < rainfall.length - 1; i++) {
        if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {

            peaks.push(i + 1);
        }
    }
    
    return peaks;
}