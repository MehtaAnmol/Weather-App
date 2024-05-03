import { compareAsc, format } from "date-fns";
import './styles/index.css';
import { startingHTML } from "./pages/loadHTML.js";
import { projects, displayProjects} from "./pages/projects.js";

startingHTML();

const addNewProject = document.querySelector(".add-new-project-button-js")
addNewProject.addEventListener("click", () =>{
    const newProjectName = document.querySelector(".new-project-input-js").value
    if(newProjectName !== ""){
        projects.push(newProjectName);
        displayProjects();
    }
    document.querySelector(".new-project-input-js").innerHTML = "";
})