import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // Tasks toDoList State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateToDo, setUpdateToDo] = useState("");

  // Add Task
  const addTask = function () {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, task: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = function (id) {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark Task as Completed
  const completedTask = function (id) {
    let completed = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(completed);
  };

  // Cancel Update
  const cancelUpdate = function () {
    setUpdateToDo("");
  };

  // Change Task for Update
  const changeTask = function (event) {
    let newEntry = {
      id: updateToDo.id,
      task: event.target.value,
      status: updateToDo.status ? true : false,
    };
    setUpdateToDo(newEntry);
  };

  // Update Task
  const updateTask = function () {
    let filterTasks = [...toDo].filter((task) => task.id !== updateToDo.id);
    let updatedTask = [...filterTasks, updateToDo];
    setToDo(updatedTask);
    setUpdateToDo("");
  };

  return (
    <div className="App container">
      <br />
      <br />
      <h2>To Do List App (React JS)</h2>
      <br />
      <br />
      {updateToDo && updateToDo ? (
        <UpdateForm
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
          updateToDo={updateToDo}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* {Display ToDoList} */}
      {toDo && toDo.length
        ? ""
        : "Congratulations you have successfully completed your to do list."}
      <ToDo
        toDo={toDo}
        setUpdateToDo={setUpdateToDo}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
