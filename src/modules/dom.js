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
        project.style.alignItems = 'center'
        project.style.justifyContent = 'space-between'
        project.style.width = '150px'
        project.style.marginBottom = '12px'
        project.style.cursor = 'pointer'

        // project element
        const projectName = document.createElement('h3')

        const removeButton = document.createElement('button')
        removeButton.style.border = 'none'
        removeButton.style.backgroundColor = 'white'
        removeButton.style.cursor = 'pointer'
        removeButton.style.fontSize = '24px'

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

        // Add an event, when clicking on project, displaying project's tasks
        const tasks = document.getElementById('tasks')
        project.addEventListener('click', () => {
            tasks.innerHTML = ''

            // project name
            const projectName = document.createElement('h2')
            projectName.innerText = proj.name
            projectName.style.marginBottom = '30px'
            projectName.style.marginTop = '30px'


            tasks.appendChild(projectName)
            proj.tasks.forEach(task => {

                //create element for task
                const taskDiv = document.createElement('div')
                const title = document.createElement('h3')
                const date = document.createElement('p')

                title.innerText = task.title
                date.innerText = task.dueDate

                //append child
                taskDiv.appendChild(title)
                taskDiv.appendChild(date)
                
                tasks.appendChild(taskDiv)

                taskDiv.style.paddingTop = '20px'
                taskDiv.style.paddingBottom = '20px'
                taskDiv.style.borderBottom = '1px solid black'
            })
        })
    })
}

// event for Add project button
const addProjectButton = document.getElementById('add-project-button')
const addProjectField = document.getElementById('add-project-field')
addProjectButton.addEventListener('click', () => {

    if (addProjectField.value === '') {
        alert('enter valid name for peoject!')
        return
    }
    
    const projectName = addProjectField.value
    const newProject = new project(projectName)
    
    projectsArray.push(newProject)

    addProjectField.value = ''

    renderProjects()
})



export { renderProjects, projectsArray }