function aTask() {
  var tInput = document.getElementById("tInput");
  var dInput = document.getElementById("dInput");
  var pInput = document.getElementById("pInput");
  var gSelect = document.getElementById("gSelect");

  var tText = tInput.value;
  var dueDate = dInput.value;
  var priority = pInput.value;
  var sGroup = gSelect.value;

  tInput.value = "";
  dInput.value = "";
  pInput.value = "";

  var lItem = document.createElement("li");
  lItem.setAttribute("draggable", "true");
  lItem.setAttribute("ondragstart", "drag(event)");

  var tName = document.createElement("span");
  tName.appendChild(document.createTextNode(tText));
  lItem.appendChild(tName);

  var tDtls = document.createElement("div");
  tDtls.className = "details";
  tDtls.innerHTML = `<strong>Due Date:</strong> ${dueDate}<br>
                                     <strong>Priority:</strong> ${priority}<br>
                                     <strong>Group:</strong> ${sGroup}`;
  lItem.appendChild(tDtls);

  var editButton = document.createElement("button");
  editButton.appendChild(document.createTextNode("Edit"));
  editButton.onclick = function () {
    openModal();
    document.getElementById("etName").value = tText;
    document.getElementById("eDueDate").value = dueDate;
    document.getElementById("ePriority").value = priority;
    document.getElementById("eGroup").value = sGroup;
  };
  lItem.appendChild(editButton);

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.onclick = function () {
    lItem.remove();
  };
  lItem.appendChild(deleteButton);

  lItem.onclick = function () {
    // Toggle the visibility of task details on click
    tDtls.style.display = tDtls.style.display === "none" ? "block" : "none";
  };

  document.getElementById("tList").appendChild(lItem);
}

function cModal() {
  document.getElementById("mModal").style.display = "none";
}

function sChanges() {
  var tNameInput = document.getElementById("etName");
  var eDueDateInput = document.getElementById("eDueDate");
  var ePriorityInput = document.getElementById("ePriority");
  var eGroupSelect = document.getElementById("eGroup");

  var updatedTaskName = tNameInput.value;
  var updatedDueDate = eDueDateInput.value;
  var updatedPriority = ePriorityInput.value;
  var updatedGroup = eGroupSelect.value;

  // Update the task details in the list
  var selectedTask = document.querySelector(
    '.details:not([style="display: none;"])'
  );
  selectedTask.innerHTML = `<strong>Due Date:</strong> ${updatedDueDate}<br>
                                      <strong>Priority:</strong> ${updatedPriority}<br>
                                      <strong>Group:</strong> ${updatedGroup}`;

  // Update the task name
  selectedTask.previousElementSibling.textContent = updatedTaskName;

  // Close the modal
  cModal();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var copyDraggedElement = draggedElement.cloneNode(true);
  ev.target.appendChild(copyDraggedElement);

  // Remove the original dragged element
  draggedElement.parentNode.removeChild(draggedElement);

  // Attach drag event to the newly added element
  copyDraggedElement.setAttribute("draggable", "true");
  copyDraggedElement.setAttribute("ondragstart", "drag(event)");
}
