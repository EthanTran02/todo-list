import project from "./project";
import task from "./task";

let projectsArray = [];

//rendering project && create and add event for project's remove button
function renderProjects() {
    const projects = document.getElementById('projects')
    projects.innerHTML = ''

    projectsArray.forEach(proj => {
        // project div
        const project = document.createElement('div')
        project.style.display = 'flex'
        project.style.justifyContent = 'space-between'
        project.style.width = '80%'
        project.style.marginBottom = '12px'
        project.style.cursor = 'pointer'

        // project element
        const projectName = document.createElement('h3')

        const removeButton = document.createElement('button')
        removeButton.style.border = 'none'
        removeButton.style.backgroundColor = 'white'
        removeButton.style.cursor = 'pointer'

        // project content
        projectName.innerText = proj.name
        removeButton.innerText = 'x'

        // append
        project.appendChild(projectName)
        project.appendChild(removeButton)

        projects.appendChild(project)

        // event for remove button
        removeButton.addEventListener('click', () => {
            const index = projectsArray.indexOf(proj);
            if (index > -1) {
                projectsArray.splice(index, 1);
            }
            renderProjects();
        })
    })
}

// event for Add project button
const addProjectButton = document.getElementById('add-project')
const addProjectField = document.getElementById('add-project-field')
addProjectButton.addEventListener('click', () => {

    const projectName = addProjectField.value
    const newProject = new project(projectName)

    projectsArray.push(newProject)

    renderProjects()
})

export { renderProjects, projectsArray }