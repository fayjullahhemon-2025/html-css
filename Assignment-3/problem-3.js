function countHashtags(caption) {
    let longestTag;
    let highestLength = -Infinity;
    if (typeof caption === 'string') {
        const splitedString = caption.split(' ');
        const hastags = splitedString.map(elem => {
            if (elem.split('').includes('#')) {
                return { elem, len: elem.length };
            }
        }).filter(elem => elem !== undefined);
        for (const el of hastags) {
            if (el.len > highestLength) {
                longestTag = el.elem.slice(1, el.length);
                highestLength = el.len;
            }
        }
        if (hastags.length !== 0) {
            return { hashtagCount: hastags.length, longestTag: longestTag }
        } else {
            return { hashtagCount: hastags.length, longestTag: "" }
        }
    }else{
        return "Invalid";
    }

    //hidden cases are not complete

}
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml #dp data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));
