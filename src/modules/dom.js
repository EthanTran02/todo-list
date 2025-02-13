// DOM.js (using form recreation)
import project from "./project";
import task from "./task";

let projectsArray = [];
let currentProject = null;
// NO global form element: let form;
const main = document.getElementById('main');
const openFormBtn = document.createElement('button');

openFormBtn.id = 'open-form-button';
openFormBtn.innerText = 'Add task';
openFormBtn.style.display = 'none';
main.appendChild(openFormBtn);

function renderProjects() {
    const projects = document.getElementById('projects');
    projects.innerHTML = '';

    const allTasksDiv = document.createElement('div');
    const allTasksName = document.createElement('p');

    allTasksName.innerText = 'All Tasks';
    allTasksDiv.appendChild(allTasksName);
    projects.appendChild(allTasksDiv);

    let allTasksElement = allTasksName;

    allTasksDiv.addEventListener('click', () => {
        projectsArray.forEach(p => {
            if (p.nameElement) {
                p.nameElement.style.fontWeight = 'normal';
            }
        });

        allTasksElement.style.fontWeight = 'bold';
        currentProject = null;
        renderAllTasks();
        // No form hiding here, as it might not exist
        openFormBtn.style.display = 'none';
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
            projectName.style.fontWeight = 'bold';
            openFormBtn.style.display = 'block';
        });
    });

    openFormBtn.addEventListener('click', () => {
        renderForm();
        openFormBtn.style.display = 'none';
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

            removeTask.addEventListener('click', e => {
                e.stopPropagation();
                proj.removeTask(taskIndex);
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

        removeTask.addEventListener('click', e => {
            e.stopPropagation();
            currentProject.removeTask(index);
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

function renderForm() {
    // Create a *new* form element each time
    const form = document.createElement('div');
    form.innerHTML = `
    <form>
        <input type="text" id="taskTitle" placeholder="Task Title">
        <input type="text" id="taskDescription" placeholder="Task Description">
        <div>
            <label for="taskDueDate">Due date</label>
            <input type="date" id="taskDueDate">
            <label for="taskDueDate">Priority</label>
            <select id="taskPriority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

        <button id="addTaskBtn">Add Task</button>
        </div>
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
            form.remove(); // Remove the form from the DOM
            openFormBtn.style.display = 'block';
        }
    });
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
});

export { renderProjects, projectsArray, renderForm };