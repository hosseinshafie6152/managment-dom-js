var added = document.getElementById("added");
var showAll = document.getElementById("showAll");
var filterPendeing = document.getElementById("filterPendeing");
var filterCompleted = document.getElementById("filterCompleted");
var clearAll = document.getElementById("clearAll");
var managmentTask = document.getElementById("managmentTask");

var list_task = [];
list_task[0] = managmentTask.children[0]
function addTask() {
  var valueInput = added.value;
  var task = document.createElement("div");
  var newTask = document.createElement("p");
  var checkBox = document.createElement("INPUT");
  var more = document.createElement("span");
  var idTask = 0;
  task.className = "task";
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "check_box";
  more.className = "material-symbols-outlined";
  more.innerText = "more_horiz";
  newTask.innerHTML = valueInput;
  managmentTask.appendChild(task);
  task.appendChild(checkBox);
  task.appendChild(newTask);
  task.appendChild(more);
  newTask.className = "text";

  for (var index = 1; index <= managmentTask.childElementCount-1 ; index++) {
    list_task[index] = managmentTask.children[index].children[1];
    idTask = index;
  }
  newTask.id = idTask;
  if (managmentTask.childElementCount > 2) {
    clearAll.classList = "clear_all active_clear";
  }
  checkBox.addEventListener("change", function () {
    if (checkBox.checked == true) {
      newTask.style.textDecoration = "line-through";
    }
    if (checkBox.checked == false) {
      newTask.style.textDecoration = "none";
    }
  });

  showAll.addEventListener("click", function () {
    showAll.classList = "active_filter btn";
    filterCompleted.className = "btn";
    filterPendeing.className = "btn";
    task.style.display = "grid";
  });

  filterPendeing.addEventListener("click", function () {
    filterPendeing.classList = "active_filter btn";
    showAll.className = "btn";
    filterCompleted.className = "btn";
    if (checkBox.checked == true) {
      task.style.display = "none";
    }
    if (checkBox.checked == false) {
      task.style.display = "grid";
    }
  });

  filterCompleted.addEventListener("click", function () {
    filterCompleted.classList = "active_filter btn";
    showAll.className = "btn";
    filterPendeing.className = "btn";
    if (checkBox.checked == false) {
      task.style.display = "none";
    }
    if (checkBox.checked == true) {
      task.style.display = "grid";
    }
  });

  clearAll.addEventListener("click", function () {
    task.remove();
    document.getElementById("inform").style.display = "block";
    clearAll.classList = "clear_all";
  });

  var div1 = document.createElement("div");
  var del = document.createElement("button");
  var recycleBin = document.createElement("span");
  var edit = document.createElement("button");
  var pen = document.createElement("span");
  function detaile() {
    del.innerHTML = "Delete";
    edit.innerHTML = "Edit";
    recycleBin.innerHTML = "delete";
    pen.innerHTML = "edit";
    div1.append(recycleBin, del, pen, edit);
    div1.className = "del_edit";
    recycleBin.className = "material-symbols-outlined";
    del.className = "del";
    edit.className = "edit";
    pen.className = "material-symbols-outlined";
    task.appendChild(div1);
  }

  more.addEventListener("click", function () {
    detaile();
  });
  del.addEventListener("click", function () {
    task.remove();
    if (managmentTask.childElementCount == 1) {
      document.getElementById("inform").style.display = "block";
      clearAll.classList = "clear_all";
    }
  });
  edit.addEventListener("click", function () {
    added.value = newTask.innerHTML;
  });
  return managmentTask;
}

added.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (!added.value) {
      return console.log('empty');
    }
    list_task.forEach(function (item) {
      if (added.value === item.innerHTML) {
        window.alert("the task is Repetitious")
      }
    });
    console.log(list_task)
    var inform = document.getElementById("inform");
    inform.style.display = "none";
    addTask();
    added.value = "";
  }
});
