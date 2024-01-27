import { FormEvent, useRef, useState } from "react";

// TODO: set update and delete .
//       set strike through
//       filter buttons
//       local storage / db

interface Task {
  id: number;
  task: string;
}

function App() {
  let globalId = 0;

  const header = "THINGS TO DO";

  // const [todos, setTodos] = useState(["Learn Alphabets", "Laundary"]);
  // const [todos, setTodos] = useState<Task[]>([]);
  const [todos, setTodos] = useState<Task[]>([
    { id: globalId++, task: "Eat" },
    { id: globalId++, task: "Study" },
    { id: globalId++, task: "Sleep" },
    { id: globalId++, task: "Repeat" },
  ]);
  const addRef = useRef<HTMLInputElement>(null);

  const handleEvent = (event: FormEvent) => {
    event.preventDefault();
    if (addRef.current !== null && addRef.current.value.length > 0) {
      const task: Task = { id: globalId++, task: addRef.current.value };
      setTodos([task, ...todos]);
      addRef.current.value = "";
    }
  };

  // const handleUpdate: (id: number) => {
  // };

  const handleDelete = (id: number) => {
    // console.log(id);

    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);

    // todos.map((todo, index) => console.log(index + 1));
  };

  return (
    <>
      <form className="container" onSubmit={handleEvent}>
        {/* HEADER */}
        <h1 className="text-center m-4">{header}</h1>

        {/* BODY */}
        <div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Add a task"
            ref={addRef}
          />
          {todos.map((todo, index) => (
            <div
              className="d-flex justify-content-between form-check  mt-3"
              key={index}
            >
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={todo.task}
                />
                <label
                  className="form-check-label text-secondary"
                  // className={
                  //   strike
                  //     ? "form-check-label text-decoration-line-through"
                  //     : "form-check-label"
                  // }
                  htmlFor={todo.task}
                >
                  {todo.task}
                </label>
              </div>
              <div>
                <button className="btn btn-outline-secondary me-2">
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(index + 1)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* FOOTER */}
          <div className="d-flex justify-content-between text-white bg-primary bg-gradient bg-opacity-50 mt-3 p-1">
            <div className="m-2">
              <button
                className="btn btn-outline-light ms-3"
                type="button"
                onClick={handleEvent}
              >
                +
              </button>
              {/* <input className="btn btn-outline-light ms-3" type="button">
                +
              </input> */}
              <button className="btn btn-outline-light ms-2" type="button">
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
            <div className="d-flex justify-content-between m-2">
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
