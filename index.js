
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const descriptionInput = document.getElementById("descriptionInput");

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskDescription = descriptionInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item");

    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");

    const titleElement = document.createElement("h2");
    titleElement.textContent = taskText;

    const dateElement = document.createElement("small");
    dateElement.textContent = taskDate;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = taskDescription;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
        toggleComplete(newTaskItem);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        editTask(newTaskItem, titleElement, dateElement, descriptionElement);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(newTaskItem);
    });

    taskDetails.appendChild(titleElement);
    taskDetails.appendChild(dateElement);

    newTaskItem.appendChild(taskDetails);
    newTaskItem.appendChild(descriptionElement);
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(deleteButton);
    taskList.appendChild(newTaskItem);

    taskInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
}
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
function deleteTask(task) {
    task.remove();
}

function editTask(task, titleElement, dateElement, descriptionElement) {
    const newTaskText = prompt("Edit the task:", titleElement.textContent);
    const newTaskDate = prompt("Edit the date:", dateElement.textContent);
    const newTaskDescription = prompt("Edit the description:", descriptionElement.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        titleElement.textContent = newTaskText;
    }

    if (newTaskDate !== null && newTaskDate.trim() !== "") {
        dateElement.textContent = newTaskDate;
    }

    if (newTaskDescription !== null) {
        descriptionElement.textContent = newTaskDescription;
    }
}
