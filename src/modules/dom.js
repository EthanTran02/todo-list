// DOM.js
import project from "./project";
import task from "./task";

let projectsArray = [];
let currentProject = null;
let form = document.createElement('div');
const main = document.getElementById('main');

function renderProjects() {
    const projects = document.getElementById('projects');
    projects.innerHTML = '';
    
    // Add "All Tasks" option at the top
    const allTasksDiv = document.createElement('div');
    const allTasksName = document.createElement('p');
    allTasksName.innerText = 'All Tasks';
    allTasksDiv.appendChild(allTasksName);
    projects.appendChild(allTasksDiv);

    // Store reference for styling
    let allTasksElement = allTasksName;
    
    // Add click event for "All Tasks"
    allTasksDiv.addEventListener('click', () => {
        // Reset all project names to normal
        projectsArray.forEach(p => {
            if (p.nameElement) {
                p.nameElement.style.fontWeight = 'normal';
            }
        });
        
        allTasksElement.style.fontWeight = 'bold';
        currentProject = null; // Set to null to indicate we're showing all tasks
        renderAllTasks();
        form.innerHTML = ''; // Hide the form when showing all tasks
    });
    
    projectsArray.forEach(proj => {
        const projectDiv = document.createElement('div');
        const projectName = document.createElement('p');
        const removeButton = document.createElement('img');

        projectName.innerText = proj.name;
        removeButton.src = '../asset/trash-outline.svg';
        removeButton.alt = 'Remove Project';

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(removeButton);
        projects.appendChild(projectDiv);

        proj.nameElement = projectName;
        
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = projectsArray.indexOf(proj);
            if (index > -1) {
                projectsArray.splice(index, 1);
                if (currentProject === proj) {
                    currentProject = null;
                    document.getElementById('tasks').innerHTML = '';
                }
            }
            renderProjects();
            if (projectsArray.length > 0) {
                currentProject = projectsArray[0];
                renderTasks();
                renderForm();
            }
        });

        projectDiv.addEventListener('click', () => {
            projectsArray.forEach(p => {
                if (p.nameElement) {
                    p.nameElement.style.fontWeight = 'normal';
                }
            });
            allTasksElement.style.fontWeight = 'normal';
            currentProject = proj;
            renderTasks();
            renderForm();
            projectName.style.fontWeight = 'bold';
        });
    });
}

function renderAllTasks() {
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = '';

    // Add header
    const header = document.createElement('h2');
    header.innerText = 'All Tasks';
    tasks.appendChild(header);

    // Iterate through all projects and their tasks
    projectsArray.forEach(proj => {
        proj.tasks.forEach((task, taskIndex) => {
            const taskDiv = document.createElement('div');
            const taskLeft = document.createElement('div');
            const title = document.createElement('h3');
            const date = document.createElement('p');
            const projectName = document.createElement('p');
            const removeTask = document.createElement('img');

            title.innerText = task.title;
            date.innerText = task.dueDate;
            projectName.innerText = `Project: ${proj.name}`;
            projectName.style.color = '#666';
            removeTask.src = '../asset/trash-outline.svg';
            removeTask.alt = 'Remove task';

            removeTask.addEventListener('click', e => {
                e.stopPropagation();
                proj.removeTask(taskIndex);
                renderAllTasks();
            });

            taskLeft.appendChild(title);
            taskLeft.appendChild(date);
            taskLeft.appendChild(projectName);
            taskDiv.appendChild(taskLeft);
            taskDiv.appendChild(removeTask);
            tasks.appendChild(taskDiv);
        });
    });
}

function renderTasks() {
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = '';

    if (!currentProject) {
        return;
    }

    const projectName = document.createElement('h2');
    projectName.innerText = currentProject.name;
    tasks.appendChild(projectName);

    currentProject.tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        const taskLeft = document.createElement('div');
        const title = document.createElement('h3');
        const date = document.createElement('p');
        const removeTask = document.createElement('img');

        title.innerText = task.title;
        date.innerText = task.dueDate;
        removeTask.src = '../asset/trash-outline.svg';
        removeTask.alt = 'Remove task';

        removeTask.addEventListener('click', e => {
            e.stopPropagation();
            currentProject.removeTask(index);
            renderTasks();
        });

        taskLeft.appendChild(title);
        taskLeft.appendChild(date);
        taskDiv.appendChild(taskLeft);
        taskDiv.appendChild(removeTask);
        tasks.appendChild(taskDiv);
    });
}

// Keep the rest of the code (renderForm and event listeners) the same
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
    main.appendChild(form);

    const addTaskBtn = document.getElementById('addTaskBtn');
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
        if (currentProject) {
            currentProject.tasks.push(newTask);
            renderTasks();
        }
    });
}

function tasksModalPopup() {

}

const addProjectButton = document.getElementById('add-project-button');
const addProjectField = document.getElementById('add-project-field');
addProjectButton.addEventListener('click', () => {
    if (addProjectField.value === '') {
        alert('enter valid name for project!');
        return;
    }

    const projectName = addProjectField.value;
    const newProject = new project(projectName);

    projectsArray.push(newProject);
    currentProject = newProject;

    addProjectField.value = '';

    renderProjects();
    renderTasks();
    renderForm();
});

export { renderProjects, projectsArray };