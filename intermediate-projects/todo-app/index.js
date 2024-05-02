const tasksContainer = document.querySelector(".tasks");
const addTaskBtn = document.querySelector(".add-task");
let isContainerRendered = false;

const tasks = [];

/**DOM Updates */

const afterRenderingTaskContainer = () => {
  const removeTasks = document.querySelector("Remove Tasks");
  removeTasks.addEventListener("click", () => {
    if (isContainerRendered == true) {
      tasksContainer.classList.add("tasks");
      isContainerRendered = false;
    }
  });
};

const renderTaskContainer = () => {
  if (isContainerRendered == false) {
    tasksContainer.classList.add("tasks-Clicked");
    addTaskBtn.textContent = "Remove Tasks";
    isContainerRendered = true;
  }
  afterRenderingTaskContainer();
};

addTaskBtn.addEventListener("click", renderTaskContainer);
