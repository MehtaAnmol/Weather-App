export const projects = [
    
]

export function displayProjects(){
    const newProjectsDisplay = document.querySelector(".new-projects-display-js");
    let newProjectHTML = "";
    projects.forEach(project => { 
        newProjectHTML += `${project} </br>`;
        newProjectsDisplay.innerHTML = newProjectHTML;
    })
}