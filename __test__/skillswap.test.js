const { filterSkillsByCategory } = require('../skillswap-functions');

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
        expect(filterSkillsByCategory(skills, 'Programming')).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    //test for 'all' filter
    test('should show all the skills', () => {
        expect(filterSkillsByCategory(skills, 'All')).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Guitar Lessons', category: 'Music', price: 15 },
            { title: 'Resume Review', category: 'Career', price: 0 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    //test for 'cooking' filter 
    test('should show [] for no existing category', () => {
        expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
    });
});

//test for price calculate function
describe('price calculate function', () =>{
    //test for $20 for 2 hours
    test('shoud show $40 dollors for $20/hr lessons with 2hours', () =>{
        expect(calculateTotalCost(20, 2).toBe(40))
    })
    test('shoud show $0 dollors for $0/hr lessons with 3hours', () =>{
        expect(calculateTotalCost(0, 3).toBe(0))
    })
    test('shoud show $37.5 dollors for $25/hr lessons with 1.5hours', () =>{
        expect(calculateTotalCost(25, 1.5).toBe(37.5))
    })
    test('shoud show $0 dollors for $20/hr lessons with 0hours', () =>{
        expect(calculateTotalCost(20, 0).toBe(0))
    })
})
