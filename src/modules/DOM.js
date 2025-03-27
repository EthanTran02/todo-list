import project from "./project";
import task from "./task";
import Storage from "./storage";
import trashIcon from "../asset/trash-outline.svg";

let projectsArray = [];
let currentProject = null;
let finishedTasks = [];

const main = document.getElementById("main");
const openFormBtn = document.createElement("button");

// Create a tooltip for the add task button
const tooltip = document.createElement("span");
tooltip.className = "tooltip";
tooltip.textContent = "Add new task";

// Initialize open form button once
openFormBtn.id = "open-form-button";
openFormBtn.innerHTML = `<span>Add task</span><span class="plus-icon">+</span>`;
openFormBtn.style.display = "none";
main.appendChild(openFormBtn);
main.appendChild(tooltip);

// Add event listener to open form button once, outside of any render functions
openFormBtn.addEventListener("click", () => {
  // Remove any existing forms first
  const existingForm = document.querySelector("form");
  if (existingForm) {
    existingForm.remove();
  }
  renderForm();
  openFormBtn.style.display = "none";
});

// Show tooltip on hover
openFormBtn.addEventListener("mouseenter", () => {
  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";
});

openFormBtn.addEventListener("mouseleave", () => {
  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
});

function renderProjects() {
  const projects = document.getElementById("projects");
  projects.innerHTML = "";

  const allTasksDiv = document.createElement("div");
  const allTasksName = document.createElement("p");
  const allTasksIcon = document.createElement("span");

  const finishedtasksDiv = document.createElement("div");
  const finishedtasksName = document.createElement("p");
  const finishedTasksIcon = document.createElement("span");

  allTasksName.innerText = "All Tasks";
  allTasksIcon.innerHTML = "📋";
  allTasksIcon.className = "sidebar-icon";
  allTasksDiv.appendChild(allTasksIcon);
  allTasksDiv.appendChild(allTasksName);
  allTasksDiv.className = "sidebar-item";
  projects.appendChild(allTasksDiv);

  finishedtasksName.innerText = "Finished Tasks";
  finishedTasksIcon.innerHTML = "✅";
  finishedTasksIcon.className = "sidebar-icon";
  finishedtasksDiv.appendChild(finishedTasksIcon);
  finishedtasksDiv.appendChild(finishedtasksName);
  finishedtasksDiv.id = "finished-tasks-div";
  finishedtasksDiv.className = "sidebar-item";

  let allTasksElement = allTasksDiv;

  finishedtasksDiv.addEventListener("click", () => {
    projectsArray.forEach((p) => {
      if (p.nameElement) {
        p.nameElement.parentElement.classList.remove("active");
      }
    });
    allTasksElement.classList.remove("active");
    finishedtasksDiv.classList.add("active");
    currentProject = null;
    renderFinishedTasks();
    openFormBtn.style.display = "none";

    // Remove any existing forms
    const existingForm = document.querySelector("form");
    if (existingForm) {
      existingForm.remove();
    }
  });

  allTasksDiv.addEventListener("click", () => {
    projectsArray.forEach((p) => {
      if (p.nameElement) {
        p.nameElement.parentElement.classList.remove("active");
      }
    });

    allTasksElement.classList.add("active");
    finishedtasksDiv.classList.remove("active");
    currentProject = null;
    renderAllTasks();
    openFormBtn.style.display = "none";

    // Remove any existing forms
    const existingForm = document.querySelector("form");
    if (existingForm) {
      existingForm.remove();
    }
  });

  projectsArray.forEach((proj) => {
    const projectDiv = document.createElement("div");
    const projectIcon = document.createElement("span");
    const projectName = document.createElement("p");
    const removeButton = document.createElement("img");

    projectIcon.innerHTML = "🗂️";
    projectIcon.className = "sidebar-icon";
    projectName.innerText = proj.name;
    removeButton.src = trashIcon;
    removeButton.alt = "Remove Project";
    removeButton.className = "remove-icon";

    projectDiv.appendChild(projectIcon);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(removeButton);
    projectDiv.className = "sidebar-item project-item";
    projects.appendChild(projectDiv);

    proj.nameElement = projectName;

    removeButton.addEventListener("click", (e) => {
      e.stopPropagation();
      // Add confirmation dialog
      if (
        confirm(`Are you sure you want to delete the project "${proj.name}"?`)
      ) {
        const index = projectsArray.indexOf(proj);
        if (index > -1) {
          projectsArray.splice(index, 1);
          Storage.saveData(projectsArray, finishedTasks);
          if (currentProject === proj) {
            currentProject = null;
            document.getElementById("tasks").innerHTML = "";
            openFormBtn.style.display = "none";

            // Remove any existing forms
            const existingForm = document.querySelector("form");
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
      }
    });

    projectDiv.addEventListener("click", () => {
      projectsArray.forEach((p) => {
        if (p.nameElement) {
          p.nameElement.parentElement.classList.remove("active");
        }
      });
      allTasksElement.classList.remove("active");
      finishedtasksDiv.classList.remove("active");
      currentProject = proj;
      renderTasks();
      projectDiv.classList.add("active");
      openFormBtn.style.display = "flex";

      // Remove any existing forms
      const existingForm = document.querySelector("form");
      if (existingForm) {
        existingForm.remove();
      }
    });
  });

  projects.appendChild(finishedtasksDiv);
}

function renderTasks() {
  const tasks = document.getElementById("tasks");
  tasks.innerHTML = "";

  if (!currentProject) {
    return;
  }

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const projectName = document.createElement("h2");
  projectName.innerText = currentProject.name;
  headerContainer.appendChild(projectName);

  const taskCount = document.createElement("span");
  taskCount.className = "task-count";
  taskCount.innerText = `${currentProject.tasks.length} ${
    currentProject.tasks.length === 1 ? "task" : "tasks"
  }`;
  headerContainer.appendChild(taskCount);

  tasks.appendChild(headerContainer);

  if (currentProject.tasks.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <p>No tasks yet</p>
      <p>Click the "Add task" button to get started</p>
    `;
    tasks.appendChild(emptyState);
    return;
  }

  currentProject.tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    const taskLeft = document.createElement("div");
    const checkbox = document.createElement("input");
    const title = document.createElement("h3");
    const date = document.createElement("p");
    const priorityBadge = document.createElement("span");
    const removeTask = document.createElement("img");

    taskDiv.className = "task-item";
    taskLeft.className = "task-content";

    // Set border color based on priority
    if (task.priority === "High") {
      taskDiv.style.borderLeftColor = "var(--danger-color)";
    } else if (task.priority === "Medium") {
      taskDiv.style.borderLeftColor = "var(--warning-color)";
    } else {
      taskDiv.style.borderLeftColor = "var(--success-color)";
    }

    checkbox.type = "checkbox";
    title.innerText = task.title;
    date.className = "task-date";
    date.innerText = formatDate(task.dueDate);

    // Add priority badge
    priorityBadge.className = `priority-badge ${task.priority.toLowerCase()}-priority`;
    priorityBadge.innerText = task.priority;

    removeTask.src = trashIcon;
    removeTask.alt = "Remove task";
    removeTask.className = "remove-icon";
    taskLeft.style.width = "100%";

    checkbox.addEventListener("click", () => {
      taskDiv.classList.add("task-complete");

      // Delay the task removal to allow for animation
      setTimeout(() => {
        currentProject.removeTask(task);
        finishedTasks.push(task);
        Storage.saveData(projectsArray, finishedTasks);
        renderTasks();
      }, 500);
    });

    removeTask.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Are you sure you want to delete this task?")) {
        currentProject.removeTask(index);
        Storage.saveData(projectsArray, finishedTasks);
        renderTasks();
      }
    });

    taskLeft.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(task);
    });

    function openModal(task) {
      const modalPopup = document.getElementById("task-modal-popup");
      const modalTitle = document.getElementById("modal-title");
      const modalDesc = document.getElementById("modal-description");
      const modalDueDate = document.getElementById("modal-duedate");
      const modalPriority = document.getElementById("modal-priority");
      const closeModal = document.getElementById("close-modal");
      const updateModal = document.getElementById("update-modal");

      modalTitle.value = task.title;
      modalDesc.value = task.description;
      modalDueDate.value = task.dueDate;
      modalPriority.value = task.priority;

      modalPopup.style.display = "block";

      setTimeout(() => {
        const closeModalOutside = (event) => {
          if (!modalPopup.contains(event.target)) {
            modalPopup.style.display = "none";
            document.removeEventListener("click", closeModalOutside);
          }
        };
        document.addEventListener("click", closeModalOutside);
      }, 0);

      closeModal.onclick = () => {
        modalPopup.style.display = "none";
      };

      updateModal.onclick = () => {
        task.title = modalTitle.value;
        task.description = modalDesc.value;
        task.dueDate = modalDueDate.value;
        task.priority = modalPriority.value;

        Storage.saveData(projectsArray, finishedTasks);
        modalPopup.style.display = "none";
        renderTasks();
      };
    }

    taskDiv.appendChild(checkbox);
    taskLeft.appendChild(title);

    const metaContainer = document.createElement("div");
    metaContainer.className = "task-meta";
    metaContainer.appendChild(date);
    metaContainer.appendChild(priorityBadge);

    taskLeft.appendChild(metaContainer);
    taskDiv.appendChild(taskLeft);
    taskDiv.appendChild(removeTask);
    tasks.appendChild(taskDiv);
  });
}

function renderAllTasks() {
  const tasks = document.getElementById("tasks");
  tasks.innerHTML = "";

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h2");
  header.innerText = "All Tasks";
  headerContainer.appendChild(header);

  const totalTasks = projectsArray.reduce(
    (count, project) => count + project.tasks.length,
    0
  );
  const taskCount = document.createElement("span");
  taskCount.className = "task-count";
  taskCount.innerText = `${totalTasks} ${
    totalTasks === 1 ? "task" : "tasks"
  } total`;
  headerContainer.appendChild(taskCount);

  tasks.appendChild(headerContainer);

  if (totalTasks === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <p>No tasks yet</p>
      <p>Create a project and add tasks to get started</p>
    `;
    tasks.appendChild(emptyState);
    return;
  }

  projectsArray.forEach((proj) => {
    if (proj.tasks.length === 0) return;

    // Create project header
    const projectHeader = document.createElement("div");
    projectHeader.className = "project-header";
    projectHeader.innerHTML = `<h3>${proj.name}</h3>`;
    tasks.appendChild(projectHeader);

    proj.tasks.forEach((task, taskIndex) => {
      const taskDiv = document.createElement("div");
      const taskLeft = document.createElement("div");
      const checkbox = document.createElement("input");
      const title = document.createElement("h3");
      const date = document.createElement("p");
      const priorityBadge = document.createElement("span");
      const removeTask = document.createElement("img");

      taskDiv.className = "task-item";
      taskLeft.className = "task-content";

      // Set border color based on priority
      if (task.priority === "High") {
        taskDiv.style.borderLeftColor = "var(--danger-color)";
      } else if (task.priority === "Medium") {
        taskDiv.style.borderLeftColor = "var(--warning-color)";
      } else {
        taskDiv.style.borderLeftColor = "var(--success-color)";
      }

      checkbox.type = "checkbox";
      title.innerText = task.title;
      date.className = "task-date";
      date.innerText = formatDate(task.dueDate);

      // Add priority badge
      priorityBadge.className = `priority-badge ${task.priority.toLowerCase()}-priority`;
      priorityBadge.innerText = task.priority;

      removeTask.src = trashIcon;
      removeTask.alt = "Remove task";
      removeTask.className = "remove-icon";
      taskLeft.style.width = "100%";

      checkbox.addEventListener("click", () => {
        taskDiv.classList.add("task-complete");

        // Delay the task removal to allow for animation
        setTimeout(() => {
          proj.removeTask(task);
          finishedTasks.push(task);
          Storage.saveData(projectsArray, finishedTasks);
          renderAllTasks();
        }, 500);
      });

      removeTask.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this task?")) {
          proj.removeTask(taskIndex);
          Storage.saveData(projectsArray, finishedTasks);
          renderAllTasks();
        }
      });

      taskLeft.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(task);
      });

      function openModal(task) {
        const modalPopup = document.getElementById("task-modal-popup");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-description");
        const modalDueDate = document.getElementById("modal-duedate");
        const modalPriority = document.getElementById("modal-priority");
        const closeModal = document.getElementById("close-modal");
        const updateModal = document.getElementById("update-modal");

        modalTitle.value = task.title;
        modalDesc.value = task.description;
        modalDueDate.value = task.dueDate;
        modalPriority.value = task.priority;

        modalPopup.style.display = "block";

        setTimeout(() => {
          const closeModalOutside = (event) => {
            if (!modalPopup.contains(event.target)) {
              modalPopup.style.display = "none";
              document.removeEventListener("click", closeModalOutside);
            }
          };
          document.addEventListener("click", closeModalOutside);
        }, 0);

        closeModal.onclick = () => {
          modalPopup.style.display = "none";
        };

        updateModal.onclick = () => {
          task.title = modalTitle.value;
          task.description = modalDesc.value;
          task.dueDate = modalDueDate.value;
          task.priority = modalPriority.value;

          Storage.saveData(projectsArray, finishedTasks);
          modalPopup.style.display = "none";
          renderAllTasks();
        };
      }

      taskDiv.appendChild(checkbox);
      taskLeft.appendChild(title);

      const metaContainer = document.createElement("div");
      metaContainer.className = "task-meta";
      metaContainer.appendChild(date);
      metaContainer.appendChild(priorityBadge);

      taskLeft.appendChild(metaContainer);
      taskDiv.appendChild(taskLeft);
      taskDiv.appendChild(removeTask);
      tasks.appendChild(taskDiv);
    });
  });
}

function renderFinishedTasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";

  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const header = document.createElement("h2");
  header.innerText = "Finished Tasks";
  headerContainer.appendChild(header);

  const taskCount = document.createElement("span");
  taskCount.className = "task-count";
  taskCount.innerText = `${finishedTasks.length} ${
    finishedTasks.length === 1 ? "task" : "tasks"
  } completed`;
  headerContainer.appendChild(taskCount);

  tasksContainer.appendChild(headerContainer);

  if (finishedTasks.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <p>No completed tasks yet</p>
      <p>Tasks you complete will appear here</p>
    `;
    tasksContainer.appendChild(emptyState);
    return;
  }

  finishedTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    const taskLeft = document.createElement("div");
    const title = document.createElement("h3");
    const date = document.createElement("p");
    const priorityBadge = document.createElement("span");
    const removeTask = document.createElement("img");

    taskDiv.className = "task-item completed-task";
    taskLeft.className = "task-content";

    title.innerText = task.title;
    title.style.textDecoration = "line-through";
    date.className = "task-date";
    date.innerText = formatDate(task.dueDate);

    // Add priority badge
    priorityBadge.className = `priority-badge ${task.priority.toLowerCase()}-priority`;
    priorityBadge.innerText = task.priority;

    removeTask.src = trashIcon;
    removeTask.alt = "Remove task";
    removeTask.className = "remove-icon";
    taskLeft.style.width = "100%";

    removeTask.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Are you sure you want to delete this completed task?")) {
        finishedTasks.splice(index, 1);
        Storage.saveData(projectsArray, finishedTasks);
        renderFinishedTasks();
      }
    });

    taskLeft.appendChild(title);

    const metaContainer = document.createElement("div");
    metaContainer.className = "task-meta";
    metaContainer.appendChild(date);
    metaContainer.appendChild(priorityBadge);

    taskLeft.appendChild(metaContainer);
    taskDiv.appendChild(taskLeft);
    taskDiv.appendChild(removeTask);
    tasksContainer.appendChild(taskDiv);
  });
}

function renderForm() {
  // Remove any existing forms first
  const existingForm = document.querySelector("form");
  if (existingForm) {
    existingForm.remove();
  }

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";
  formContainer.innerHTML = `
        <form id="taskForm">
            <div class="form-header">
                <h3>Add New Task</h3>
                <div id="close-form">×</div>
            </div>
            <div class="form-group">
                <label for="taskTitle">Task Title</label>
                <input type="text" id="taskTitle" placeholder="Enter task title" required>
            </div>
            <div class="form-group">
                <label for="taskDescription">Description</label>
                <textarea id="taskDescription" placeholder="Enter task description" rows="3"></textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="taskDueDate">Due date</label>
                    <input type="date" id="taskDueDate" required>
                </div>
                <div class="form-group">
                    <label for="taskPriority">Priority</label>
                    <select id="taskPriority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            <button id="addTaskBtn" type="submit">Add Task</button>
        </form>
    `;
  main.appendChild(formContainer);

  const form = document.getElementById("taskForm");
  const closeForm = document.getElementById("close-form");

  closeForm.addEventListener("click", () => {
    formContainer.remove();
    openFormBtn.style.display = "block";
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDueDate = document.getElementById("taskDueDate").value;
    const taskPriority = document.getElementById("taskPriority").value;

    if (taskTitle === "" || taskDueDate === "") {
      alert("Please fill in the task title and due date.");
      return;
    }

    const newTask = new task(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority
    );
    if (currentProject) {
      currentProject.tasks.push(newTask);
      Storage.saveData(projectsArray, finishedTasks);
      renderTasks();
      formContainer.remove();
      openFormBtn.style.display = "block";
    }
  };

  form.addEventListener("submit", handleSubmit);
}

// Helper function to format dates in a more readable format
function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dateOptions = { month: "short", day: "numeric" };

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    return date.toLocaleDateString("en-US", dateOptions);
  }
}

const addProjectButton = document.getElementById("add-project-button");
const addProjectField = document.getElementById("add-project-field");
addProjectButton.addEventListener("click", () => {
  if (addProjectField.value === "") {
    alert("Please enter a valid name for the project!");
    return;
  }

  const projectName = addProjectField.value;
  const newProject = new project(projectName);

  projectsArray.push(newProject);
  currentProject = newProject;

  addProjectField.value = "";

  renderProjects();
  openFormBtn.style.display = "block";

  Storage.saveData(projectsArray, finishedTasks);
});

export { renderProjects, projectsArray, renderForm, finishedTasks };
