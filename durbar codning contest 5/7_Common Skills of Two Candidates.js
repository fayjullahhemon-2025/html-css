function commonSkills(skills1, skills2) {
    const set1 = new Set(skills1.map(skill => skill.toLowerCase()));
    
    const set2 = new Set(skills2.map(skill => skill.toLowerCase()));
    
    const common = [];
    
    for (const skill of set2) {
        if (set1.has(skill)) {
            common.push(skill);
        }
    }
    

    return common.sort();
}