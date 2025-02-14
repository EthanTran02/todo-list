import project from "./project";
import task from "./task";
import Storage from './storage';

let projectsArray = [];
let currentProject = null;
let finishedTasks = [];

const main = document.getElementById('main');
const openFormBtn = document.createElement('button');

// Initialize open form button once
openFormBtn.id = 'open-form-button';
openFormBtn.innerText = 'Add task';
openFormBtn.style.display = 'none';
main.appendChild(openFormBtn);

// Add event listener to open form button once, outside of any render functions
openFormBtn.addEventListener('click', () => {
    // Remove any existing forms first
    const existingForm = document.querySelector('form');
    if (existingForm) {
        existingForm.remove();
    }
    renderForm();
    openFormBtn.style.display = 'none';
});

function renderProjects() { 
    const projects = document.getElementById('projects');
    projects.innerHTML = '';

    const allTasksDiv = document.createElement('div');
    const allTasksName = document.createElement('p');

    const finishedtasksDiv = document.createElement('div');
    const finishedtasksName = document.createElement('p');

    allTasksName.innerText = 'All Tasks';
    allTasksDiv.appendChild(allTasksName);
    projects.appendChild(allTasksDiv);
        
    finishedtasksName.innerText = 'Finished Tasks';
    finishedtasksDiv.appendChild(finishedtasksName);
    finishedtasksDiv.id = 'finished-tasks-div';

    let allTasksElement = allTasksName;

    finishedtasksDiv.addEventListener('click', () => {
        projectsArray.forEach(p => {
            if (p.nameElement) {
                p.nameElement.style.fontWeight = 'normal';
            }
        });
        allTasksElement.style.fontWeight = 'normal';
        finishedtasksDiv.style.fontWeight = 'bold';
        currentProject = null;
        renderFinishedTasks();
        openFormBtn.style.display = 'none';
        
        // Remove any existing forms
        const existingForm = document.querySelector('form');
        if (existingForm) {
            existingForm.remove();
        }
    });

    allTasksDiv.addEventListener('click', () => {
        projectsArray.forEach(p => {
            if (p.nameElement) {
                p.nameElement.style.fontWeight = 'normal';
            }
        });

        allTasksElement.style.fontWeight = 'bold';
        finishedtasksDiv.style.fontWeight = 'normal';
        currentProject = null;
        renderAllTasks();
        openFormBtn.style.display = 'none';
        
        // Remove any existing forms
        const existingForm = document.querySelector('form');
        if (existingForm) {
            existingForm.remove();
        }
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
                Storage.saveData(projectsArray, finishedTasks);
                if (currentProject === proj) {
                    currentProject = null;
                    document.getElementById('tasks').innerHTML = '';
                    openFormBtn.style.display = 'none';
                    
                    // Remove any existing forms
                    const existingForm = document.querySelector('form');
                    if (existingForm) {
                        existingForm.remove();
                    }
                }
            }
            renderProjects();
            if (projectsArray.length > 0) {
                currentProject = projectsArray[0];
                renderTasks();
            }
        });

        projectDiv.addEventListener('click', () => {
            projectsArray.forEach(p => {
                if (p.nameElement) {
                    p.nameElement.style.fontWeight = 'normal';
                }
            });
            allTasksElement.style.fontWeight = 'normal';
            finishedtasksDiv.style.fontWeight = 'normal';
            currentProject = proj;
            renderTasks();
            projectName.style.fontWeight = 'bold';
            openFormBtn.style.display = 'block';
            
            // Remove any existing forms
            const existingForm = document.querySelector('form');
            if (existingForm) {
                existingForm.remove();
            }
        });
    });

    projects.appendChild(finishedtasksDiv);
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
        const checkbox = document.createElement('input');
        const title = document.createElement('h3');
        const date = document.createElement('p');
        const removeTask = document.createElement('img');

        checkbox.type = 'checkbox';
        title.innerText = task.title;
        date.innerText = task.dueDate;
        removeTask.src = '../asset/trash-outline.svg';
        removeTask.alt = 'Remove task';

        checkbox.addEventListener('click', () => {
            currentProject.removeTask(task);
            finishedTasks.push(task);
            Storage.saveData(projectsArray, finishedTasks)
            renderTasks();
        });

        removeTask.addEventListener('click', e => {
            e.stopPropagation();
            currentProject.removeTask(index);
            Storage.saveData(projectsArray, finishedTasks);
            renderTasks();
        });

        taskLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(task);
        });

        function openModal(task) {
            const modalPopup = document.getElementById('task-modal-popup');
            const modalTitle = document.getElementById('modal-title');
            const modalDesc = document.getElementById('modal-description');
            const modalDueDate = document.getElementById('modal-duedate');
            const modalPriority = document.getElementById('modal-priority');
            const closeModal = document.getElementById('close-modal');
            const updateModal = document.getElementById('update-modal');

            modalTitle.value = task.title;
            modalDesc.value = task.description;
            modalDueDate.value = task.dueDate;
            modalPriority.value = task.priority;

            modalPopup.style.display = 'block';

            setTimeout(() => {
                const closeModalOutside = (event) => {
                    if (!modalPopup.contains(event.target)) {
                        modalPopup.style.display = 'none';
                        document.removeEventListener('click', closeModalOutside);
                    }
                };
                document.addEventListener('click', closeModalOutside);
            }, 0);

            closeModal.onclick = () => {
                modalPopup.style.display = 'none';
            };

            updateModal.onclick = () => {
                task.title = modalTitle.value;
                task.description = modalDesc.value;
                task.dueDate = modalDueDate.value;
                task.priority = modalPriority.value;

                Storage.saveData(projectsArray, finishedTasks);
                modalPopup.style.display = 'none';
                renderTasks();
            };
        }

        taskDiv.appendChild(checkbox);
        taskLeft.appendChild(title);
        taskLeft.appendChild(date);
        taskDiv.appendChild(taskLeft);
        taskDiv.appendChild(removeTask);
        tasks.appendChild(taskDiv);
    });
}

function renderAllTasks() {
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = '';

    const header = document.createElement('h2');
    header.innerText = 'All Tasks';
    tasks.appendChild(header);

    projectsArray.forEach(proj => {
        proj.tasks.forEach((task, taskIndex) => {
            const taskDiv = document.createElement('div');
            const taskLeft = document.createElement('div');
            const checkbox = document.createElement('input');
            const title = document.createElement('h3');
            const date = document.createElement('p');
            const projectName = document.createElement('p');
            const removeTask = document.createElement('img');

            checkbox.type = 'checkbox';
            title.innerText = task.title;
            date.innerText = task.dueDate;
            projectName.innerText = `Project: ${proj.name}`;
            projectName.style.color = '#666';
            removeTask.src = '../asset/trash-outline.svg';
            removeTask.alt = 'Remove task';

            checkbox.addEventListener('click', () => {
                proj.removeTask(task);
                finishedTasks.push(task);
                Storage.saveData(projectsArray, finishedTasks)
                renderAllTasks();
            });

            removeTask.addEventListener('click', e => {
                e.stopPropagation();
                proj.removeTask(taskIndex);
                Storage.saveData(projectsArray, finishedTasks);
                renderAllTasks();
            });

            taskLeft.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(task);
            });

            function openModal(task) {
                const modalPopup = document.getElementById('task-modal-popup');
                const modalTitle = document.getElementById('modal-title');
                const modalDesc = document.getElementById('modal-description');
                const modalDueDate = document.getElementById('modal-duedate');
                const modalPriority = document.getElementById('modal-priority');
                const closeModal = document.getElementById('close-modal');
                const updateModal = document.getElementById('update-modal');

                modalTitle.value = task.title;
                modalDesc.value = task.description;
                modalDueDate.value = task.dueDate;
                modalPriority.value = task.priority;

                modalPopup.style.display = 'block';

                setTimeout(() => {
                    const closeModalOutside = (event) => {
                        if (!modalPopup.contains(event.target)) {
                            modalPopup.style.display = 'none';
                            document.removeEventListener('click', closeModalOutside);
                        }
                    };
                    document.addEventListener('click', closeModalOutside);
                }, 0);

                closeModal.onclick = () => {
                    modalPopup.style.display = 'none';
                };

                updateModal.onclick = () => {
                    task.title = modalTitle.value;
                    task.description = modalDesc.value;
                    task.dueDate = modalDueDate.value;
                    task.priority = modalPriority.value;

                    Storage.saveData(projectsArray, finishedTasks);
                    modalPopup.style.display = 'none';
                    renderAllTasks();
                };
            }

            taskDiv.appendChild(checkbox);
            taskLeft.appendChild(title);
            taskLeft.appendChild(date);
            taskLeft.appendChild(projectName);
            taskDiv.appendChild(taskLeft);
            taskDiv.appendChild(removeTask);
            tasks.appendChild(taskDiv);
        });
    });
}

function renderFinishedTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    const header = document.createElement('h2');
    header.innerText = 'Finished tasks';
    tasksContainer.appendChild(header);

    finishedTasks.forEach((task, index) => {
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
            finishedTasks.splice(index, 1);
            Storage.saveData(projectsArray, finishedTasks);
            renderFinishedTasks();
        });

        taskLeft.appendChild(title);
        taskLeft.appendChild(date);
        taskDiv.appendChild(taskLeft);
        taskDiv.appendChild(removeTask);
        tasksContainer.appendChild(taskDiv);
    });
}

function renderForm() {
    // Remove any existing forms first
    const existingForm = document.querySelector('form');
    if (existingForm) {
        existingForm.remove();
    }

    const formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <form id="taskForm">
            <input type="text" id="taskTitle" placeholder="Task Title">
            <input type="text" id="taskDescription" placeholder="Task Description">
            <div>
                <label for="taskDueDate">Due date</label>
                <input type="date" id="taskDueDate">
                <label for="taskPriority">Priority</label>
                <select id="taskPriority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button id="addTaskBtn">Add Task</button>
            </div>
        </form>
    `;
    main.appendChild(formContainer);

    const form = document.getElementById('taskForm');

    const handleSubmit = (e) => {
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
            Storage.saveData(projectsArray, finishedTasks);
            renderTasks();
            formContainer.remove();
            openFormBtn.style.display = 'block';
        }
    };

    form.addEventListener('submit', handleSubmit);
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
    openFormBtn.style.display = 'block';

    Storage.saveData(projectsArray, finishedTasks)
});

export { renderProjects, projectsArray, renderForm, finishedTasks };