import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // Tasks toDoList State
  const [toDo, setToDo] = useState([
    { id: 1, task: "first task", status: true },
    { id: 2, task: "second task", status: false },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateToDo, setUpdateToDo] = useState("");

  // Add Task
  const addTask = function () {
    //
  };

  // Delete Task
  const deleteTask = function (id) {
    //
  };

  // Mark Task as Completed
  const completedTask = function (id) {
    //
  };

  // Cancel Update
  const cancelUpdate = function () {
    //
  };

  // Change Task for Update
  const changeTask = function (event) {
    //
  };

  // Update Task
  const updateTask = function () {
    //
  };

  return (
    <div className="App container">
      <br />
      <br />
      <h2>To Do List App (React JS)</h2>
      <br />
      <br />
      {/* {Display ToDoList} */}
      {toDo && toDo.length
        ? ""
        : "Congratulations you have successfully completed your to do list."}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.task}</span>
                </div>
                <div className="iconsWrap">
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
