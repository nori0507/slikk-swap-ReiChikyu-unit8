/*execute the function that changes the visual of the skill crads when the mouse havors over them */
document.addEventListener("DOMContentLoaded",() =>{
    /*getting all skills(cards)*/
    const skillCard= document.querySelectorAll(".skills")
    
    /*Actions are assigned for each card*/
    skillCard.forEach((card) => {
        /*.skills.mouse-hovered layout assigned when the mouse hovers over the card*/
        card.addEventListener("mouseenter", () => {
            card.classList.add("mouse-hovered");
        })
        /*.skills.mouse-hovered layout removed when the mouse leaves the card*/
        card.addEventListener("mouseleave", () =>{
            card.classList.remove("mouse-hovered");
        })
    })
})

/*contents of skills that will pop up on the UI*/
const Skills = [
    {
        title: "Python Tutoring",
        category: "Programming",
        price: 20,
        provider: "Sam",
        details: "If you have any bugs in your project, you are not sure where to start coding, or if you are not understanding the concept, this is the perfect place for yout to come!"
    },
    {
        title: "Guitar Lessons",
        category: "Music",
        price: 15,
        provider: "Jessica",
        details: "You want to learn how to play the guitar!? Then you found the perfect place!"
    },
    {
        title: "Resume Review",
        category: "Career",
        price: 0,
        provider: "Sara",
        details: "If you are struggling with what to put on your resume, this is a greate time to figure it out!"
    },
    {
        title: "Web Development",
        category: "Programming",
        price: 25,
        provider: "Mike",
        details: "If you want to develop a website, you can get basic knowledges through the session!"
    }
];

//function for the skill filter (copied from skillswap-funtions.js)
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

//functions to format the deisplayed skills
function displaySkills(skills) {
    const container = document.getElementById("skills-container");
    container.innerHTML = ""; //making sure the container is empty
    
    skills.forEach(skill => {
        const skillCard = document.createElement("article");
        skillCard.className = "skills";//based on original html file structure, using the same name for consisitancy
        skillCard.innerHTML = 
            `<h3>${skill.title}</h3>
            <p>Category: ${skill.category}</p>
            <p>Price: $${skill.price}/hr</p>
            <p>Provider: ${skill.provider}</p>
            <p class="skill-detail">Click here for more details!</p>
            <p class="detail-description">${skill.details}</p>`; // contents of the skill

        const detailButton =skillCard.querySelector(".skill-detail");
        const detailDescription =skillCard.querySelector(".detail-description");
        //Integrated the existing Eventlistener within this function
        //When you click"Click here for more details" button, the detailed explanation pops up.
        detailButton.addEventListener("click", () => {
            detailDescription.classList.toggle("active");
            if (detailDescription.classList.contains("active")) {
                detailButton.textContent ="Hide details"; //when the detailed explanation is shown
            } 
            else {
                detailButton.textContent ="Click here for more details!";// when the detailed expkanation is not shown
            }
        });
        container.appendChild(skillCard);//showing thecard on the webpage
    });
}

//connected top the filter buttons, shows skill cards according to the filter the user chose
document.addEventListener("DOMContentLoaded", () => {
    const buttons =document.querySelectorAll(".filter");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category =button.textContent;
            const filteredSkills =filterSkillsByCategory(Skills,category);//filtering the skills
            displaySkills(filteredSkills);//showing the filtered skills
        });
    });
    displaySkills(Skills);//showing all the skills when nothing is selected
});