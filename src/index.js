import "./style.css";
import { renderProjects, projectsArray, finishedTasks } from "./modules/DOM";
import Project from "./modules/project";
import Task from "./modules/task";
import Storage from "./modules/storage"; // Ensure Storage is imported

document.addEventListener("DOMContentLoaded", () => {
  const savedData = Storage.loadData();

  if (savedData) {
    // Clear existing arrays
    projectsArray.length = 0;
    finishedTasks.length = 0;

    // Reconstruct projects from saved data
    savedData.projects.forEach((projectData) => {
      const project = new Project(projectData.name);
      projectData.tasks.forEach((taskData) => {
        const task = new Task(
          taskData.title,
          taskData.description,
          taskData.dueDate,
          taskData.priority
        );
        task.complete = taskData.complete;
        project.addTask(task);
      });
      projectsArray.push(project);
    });

    // Reconstruct finished tasks
    savedData.finishedTasks.forEach((taskData) => {
      const task = new Task(
        taskData.title,
        taskData.description,
        taskData.dueDate,
        taskData.priority
      );
      task.complete = taskData.complete;
      finishedTasks.push(task);
    });
  } else {
    // Your existing initialization code for first-time users
    const project1 = new Project("default");
    const task1 = new Task(
      "wash dishes",
      "washes dishes before mom go home",
      "2025-02-17",
      "High"
    );
    const task2 = new Task("play tenis", "i dont know", "2025-02-17", "Medium");
    project1.addTask(task1);
    project1.addTask(task2);
    projectsArray.push(project1);

    Storage.saveData(projectsArray, finishedTasks);
  }

  renderProjects();
});

// ==> deloy on git
