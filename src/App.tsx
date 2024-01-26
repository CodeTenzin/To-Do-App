import { FormEvent, useRef, useState } from "react";

interface Strike {
  id: number;
  striked: boolean;
}

function App() {
  const header = "THINGS TO DO";

  // const [todos, setTodos] = useState(["Learn Alphabets", "Laundary"]);
  const [todos, setTodos] = useState<string[]>([]);
  // const [strike, setStrike] = useState<Strike[]>([]);
  const addRef = useRef<HTMLInputElement>(null);

  const handleEvent = (event: FormEvent) => {
    event.preventDefault();
    if (addRef.current !== null) {
      setTodos([addRef.current.value, ...todos]);
      addRef.current.value = "";
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleEvent}>
        <h1 className="text-center m-4">{header}</h1>
        <div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Add a task"
            ref={addRef}
          />
          <button type="submit" className="btn btn-primary d-none">
            Add
          </button>

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
                  id={todo}
                  // onChange={() => setStrike([...strike, ])}
                />
                <label
                  className="form-check-label text-secondary"
                  // className={
                  //   strike
                  //     ? "form-check-label text-decoration-line-through"
                  //     : "form-check-label"
                  // }
                  htmlFor={todo}
                >
                  {todo}
                </label>
              </div>
              <div>
                <button className="btn btn-outline-secondary me-2">
                  Update
                </button>
                <button className="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between text-white bg-primary bg-gradient bg-opacity-50 mt-3 p-1">
            <div className="m-2">
              <button className="btn btn-outline-light ms-3" type="button">
                +
              </button>
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
