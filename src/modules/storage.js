const STORAGE_KEY = "todoListData";

const Storage = {
  saveData(projectsArray, finishedTasks) {
    const data = {
      projects: projectsArray.map((project) => ({
        name: project.name,
        tasks: project.tasks.map((task) => ({
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
          priority: task.priority,
          complete: task.complete,
        })),
      })),
      finishedTasks: finishedTasks.map((task) => ({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        complete: task.complete,
      })),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;

    return JSON.parse(data);
  },

  clearData() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

export default Storage;
