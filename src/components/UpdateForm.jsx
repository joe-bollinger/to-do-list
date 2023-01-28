const UpdateForm = ({ changeTask, updateTask, cancelUpdate, updateToDo })=> {
  return (
    <>
          {/* {Update Task} */}
          <div className="row">
            <div className="col">
              <input
                value={updateToDo && updateToDo.task}
                onChange={(event) => changeTask(event)}
                className="form-control form-control-lg"
              ></input>
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-success mr-20"
              >
                Update
              </button>
              <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
  )
}

export default UpdateForm;