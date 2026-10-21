//function for theskill filter
function filterSkillsByCategory(skills, category){
    if (category === 'All') {
        return skills;
    }

    const result = [];

    for (const skill of skills) {
        if (skill.category === category) {
            result.push(skill);
        }
    }

    return result;
}

module.exports = {filterSkillsByCategory};