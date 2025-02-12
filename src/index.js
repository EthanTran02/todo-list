import './style.css';
import { renderProjects, projectsArray, renderForm } from './modules/DOM';
import Project from './modules/project';
import Task from './modules/task';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the initial project and tasks
    const project1 = new Project('default');
    const task1 = new Task('wash dishes', 'washes dishes before mom go home', '2025-02-17', 'High');
    const task2 = new Task('play tenis', 'sdaf', '2025-02-17', 'eafef');
    project1.addTask(task1);
    project1.addTask(task2);

    projectsArray.push(project1);

    // Call renderProjects to display the initial project
    renderProjects();
    renderForm()
    
});

console.log('okemnhaem');

// IMPORTANT!!
// click project -> open modal popup that can adjust the task's infomation
// update UI for form