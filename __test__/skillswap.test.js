//skills used fot testing
const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

//tests for skill filter function
describe('filter function', () =>{
    //test for 'programming' filter
    test('should show skills categorized as "Programming"', () => {
        expect(filterSkillsByCategory(skills, 'Programming')).toBe([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    //test for 'all' filter
    test('should show all the skills', () => {
        expect(filterSkillsByCategory(skills, 'All')).toBe([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Guitar Lessons', category: 'Music', price: 15 },
            { title: 'Resume Review', category: 'Career', price: 0 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    //test for 'cooking' filter 
    test('should show [] for no existing category', () => {
        expect(filterSkillsByCategory(skills, 'Cooking')).toBE([]);
    });
});