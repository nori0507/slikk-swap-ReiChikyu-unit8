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

// function for calculating the cost based on price and hours
function calculateTotalCost(price, hours){
    return price*hours
}

module.exports = {filterSkillsByCategory, calculateTotalCost};