import { useState } from "react";

function App() {
  const header = "THINGS TO DO";

  const [todos, setTodos] = useState(["Learn Alphabets", "Laundary"]);
  // const [todos, setTodos] = useState([]);

  return (
    <>
      <form className="container">
        <h1 className="text-center m-4">{header}</h1>
        <div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Add a task"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>

          {todos.map((todo, index) => (
            <div className="form-check  mt-3" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={todo}
              ></input>
              <label className="form-check-label" htmlFor={todo}>
                {todo}
              </label>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3">
            <div>
              <button className="ms-3" type="button">
                +
              </button>
              <button className="ms-2" type="button">
                🔎
              </button>
              <span className="ms-3">|</span>
              <span className="ms-3">
                {todos.length > 1
                  ? `${todos.length} items left`
                  : `${todos.length} item left`}
              </span>
            </div>
            {/* <div className="d-flex justify-content-around"> */}
            <div className="d-flex justify-content-between">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="All"
                autoComplete="off"
              />
              <label className="btn me-3" htmlFor="All">
                All
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="Active"
                autoComplete="off"
              />
              <label className="btn me-3" htmlFor="Active">
                Active
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="Completed"
                autoComplete="off"
              />
              <label className="btn me-3" htmlFor="Completed">
                Completed
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

/*
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>


*/

export default App;
