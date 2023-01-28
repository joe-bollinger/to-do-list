import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, setUpdateToDo, completedTask, deleteTask })=> {
  return (
    <>
    {toDo &&
      toDo
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.task}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    onClick={(event) => completedTask(task.id)}
                    title="Completed / Not Completed"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {task.status ? null : (
                    <span
                      onClick={() =>
                        setUpdateToDo({
                          id: task.id,
                          task: task.task,
                          status: task.status ? true : false,
                        })
                      }
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span onClick={() => deleteTask(task.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}</>
  )
}

export default ToDo;