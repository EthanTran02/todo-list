// DOM.js
import project from "./project";
import task from "./task";

let projectsArray = [];
let currentProject = null; // Store the currently selected project

let form = document.createElement('div');
const main = document.getElementById('main');

//rendering project && create and add event for project's remove button
function renderProjects() {
    const projects = document.getElementById('projects');
    projects.innerHTML = '';

    projectsArray.forEach(proj => {
        // project div
        const projectDiv = document.createElement('div'); // Changed variable name to avoid shadowing

        // project element
        const projectName = document.createElement('p');

        const removeButton = document.createElement('button');
        // project content
        projectName.innerText = proj.name;
        removeButton.innerText = 'x';

        // append
        projectDiv.appendChild(projectName);
        projectDiv.appendChild(removeButton);

        projects.appendChild(projectDiv);

        // event for remove button
        removeButton.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            const index = projectsArray.indexOf(proj);
            if (index > -1) {
                projectsArray.splice(index, 1);
                 // If the removed project was the current one, clear the task display
                if (currentProject === proj) {
                    currentProject = null;
                    document.getElementById('tasks').innerHTML = '';
                }
            }
           
            renderProjects();

            if (projectsArray.length > 0) {
                currentProject = projectsArray[0]; // Select the first project
                renderTasks();
                renderForm();
            }
        });

        // Add an event, when clicking on project, displaying project's tasks && display the input field for adding new task
        projectDiv.addEventListener('click', () => {  // Use projectDiv
            currentProject = proj; // Set the current project
            renderTasks(); // Render the tasks for this project
            renderForm();
        });
    });
}

function renderTasks() {
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = '';

    if (!currentProject) {
        return; // No project selected, nothing to render
    }

    // project name
    const projectName = document.createElement('h2');
    projectName.innerText = currentProject.name;

    tasks.appendChild(projectName);

    currentProject.tasks.forEach((task, index) => {
        //create element for task
        const taskDiv = document.createElement('div');
        const taskLeft = document.createElement('div')
        const title = document.createElement('h3');
        const date = document.createElement('p');
        const removeTask = document.createElement('button')

        title.innerText = task.title;
        date.innerText = task.dueDate;
        removeTask.innerText = 'x'

        //add event for task's remove button 
        removeTask.addEventListener('click', e => {
            e.stopPropagation

            currentProject.removeTask(index)
            renderTasks
        })

        //append child
        taskLeft.appendChild(title);
        taskLeft.appendChild(date);
        taskDiv.appendChild(taskLeft)
        taskDiv.appendChild(removeTask)

        tasks.appendChild(taskDiv);

    });
}

function renderForm() {
    form.innerHTML = '';
            form.innerHTML = `
            <form>
                <h2>Adding Tasks:</h2>
                <input type="text" id="taskTitle" placeholder="Task Title">
                <input type="text" id="taskDescription" placeholder="Task Description">
                <input type="date" id="taskDueDate">
                <select id="taskPriority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button id="addTaskBtn">Add Task</button>
            </form>
            `;
            main.appendChild(form)

            const addTaskBtn = document.getElementById('addTaskBtn')
            addTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const taskTitle = document.getElementById('taskTitle').value;
                const taskDescription = document.getElementById('taskDescription').value;
                const taskDueDate = document.getElementById('taskDueDate').value;
                const taskPriority = document.getElementById('taskPriority').value;

                if (taskTitle === '' || taskDueDate === '') {
                    alert('Please fill in the task title and due date.');
                    return;
                }

                const newTask = new task(taskTitle, taskDescription, taskDueDate, taskPriority);
                 // Use currentProject, not proj
                if (currentProject) {
                    currentProject.tasks.push(newTask);
                    renderTasks(); // Re-render *tasks*, not projects
                }
            })
}



// event for Add project button
const addProjectButton = document.getElementById('add-project-button');
const addProjectField = document.getElementById('add-project-field');
addProjectButton.addEventListener('click', () => {
    if (addProjectField.value === '') {
        alert('enter valid name for peoject!');
        return;
    }

    const projectName = addProjectField.value;
    const newProject = new project(projectName);

    projectsArray.push(newProject);
    currentProject = newProject

    addProjectField.value = '';

    renderProjects();
    renderTasks();
    renderForm();
});



export { renderProjects, projectsArray };