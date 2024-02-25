import { Todo } from "./InputField";

interface Props {
  todos: Todo[];
  onAdd: () => void;
}

// const FilterTask = ({ todos, onAdd }: Props) => {
const FilterTask = ({ todos }: Props) => {
  return (
    // <div className="d-flex justify-content-between text-white bg-primary bg-gradient bg-opacity-50 mt-3 p-1">
    <div
      className={
        todos.length < 1
          ? "d-none"
          : "d-flex justify-content-between text-white bg-primary bg-gradient bg-opacity-50 mt-3 p-1"
      }
    >
      <div className="m-2">
        {/* <button
          className="btn btn-outline-light ms-3"
          type="button"
          onClick={onAdd}
        >
          +
        </button> */}
        {/* <button className="btn btn-outline-light ms-2" type="button">
          🔎
        </button> */}
        {/* <span className="ms-3">|</span> */}
        <span className="ms-3">
          {todos.length > 1
            ? `${todos.length} tasks left`
            : `${todos.length} task left`}
        </span>
      </div>
      {/* <div className="d-flex justify-content-between m-2">
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
      </div> */}
    </div>
  );
};

export default FilterTask;
