export function startingHTML() {
const bodyElement = document.querySelector("body");
let bodyHtml = "";
    bodyHtml += `
        <div class="heading">Todo List </div>
        <div class="main-container">
            <div class="left-container">
                <div class = "tasks-container tasks-container">
                    <div class = "all-tasks all-tasks-js"></div>
                    <div class = "task-today task-today-js"></div>
                    <div class = "task-completed task-completed-js"></div>
                </div>
                <div class = "new-projects new-projects">
                    <div class = "new-projects-heading new-projects-heading-js">Projects:</div>
                    <div class = "new-projects-input-container new-projects-input-container-js">
                        <div class = "new-projects-display-js"></div>
                        <input class = "new-project-input new-project-input-js" type = "text" placeholder = "New Project">
                        <button class = "add-new-project-button-js">Submit</button>
                    </div>
                </div>
            </div>
            <div class="right-container"></div>
        </div>
`
bodyElement.innerHTML = bodyHtml;}