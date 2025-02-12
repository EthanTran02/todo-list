import './style.css';
import { renderProjects, projectsArray } from './modules/DOM';
import Project from './modules/project';
import Task from './modules/task';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the initial project and tasks
    const project1 = new Project('default');
    const task1 = new Task('wash dishes', 'description', '2025-02-17', 'priority');
    const task2 = new Task('play tenis', 'sdaf', '2025-02-17', 'eafef');
    project1.addTask(task1);
    project1.addTask(task2);

    projectsArray.push(project1);

    // Call renderProjects to display the initial project
    renderProjects();
});

console.log('okemnhaem');

// IMPORTANT!!
// add project name "all tasks" show all the tasks and removeable
// click project -> open modal popup that can adjust the task's infomation