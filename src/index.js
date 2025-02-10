import './style.css';
import { renderProjects, projectsArray } from './modules/DOM';
import Project from './modules/project';
import Task from './modules/task';

const now = new Date()
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the initial project and tasks
    const project1 = new Project('default');
    const task1 = new Task('title', 'description', now, 'priority');
    const task2 = new Task('af', 'sdaf', 'fae', 'eafef');
    project1.addTask(task1);
    project1.addTask(task2);

    projectsArray.push(project1);

    // Call renderProjects to display the initial project
    renderProjects();
});

console.log('okemnhaem');

