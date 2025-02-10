import './style.css';
import { renderProjects, projectsArray } from './modules/DOM';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the initial project and tasks
    const project1 = new project('default');
    const task1 = new task('title', 'description', 'dueDate', 'priority');
    project1.addTask(task1);

    projectsArray.push(project1);

    // Call renderProjects to display the initial project
    renderProjects();
});


