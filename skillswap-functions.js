//function for the skill filter
function filterSkillsByCategory(skills, category){
    //when the filter is "All", return all the skills
    if (category === 'All') {
        return skills;
    }
    //result will be stored in an array
    const result = [];

    for (const skill of skills) {
        if (skill.category === category) {
            result.push(skill); // adding skills into an array when it matches
        }
    }

    return result;
}

// function to calculate the total session cost based on price per hour and hours of the session
function calculateTotalCost(price, hours){
    return price*hours
}

module.exports = {filterSkillsByCategory, calculateTotalCost};