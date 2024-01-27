import { Todo } from "./InputField";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TaskField = ({ todos, onDelete }: Props) => {
  if (todos.length === 0) return null;

  //   const handleCheckBox = (todo: Todo, index: number) => {
  //     const striked = todo.striked;
  //     todo.striked = !striked;
  //   };

  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className="d-flex justify-content-between form-check  border-bottom border-secondary  p-1 m-2"
          key={index}
        >
          <div>
            {/* <input
              className="form-check-input me-3"
              //   onChange={() => handleCheckBox(todo, index)}
              type="checkbox"
              value=""
              id={todo.id.toString()}
            /> */}
            <label
              className="form-check-label text-secondary"
              //   className={
              //     todo.striked
              //       ? "form-check-label text-secondary text-decoration-line-through"
              //       : "form-check-label text-secondary"
              //   }
              htmlFor={todo.id.toString()}
            >
              {todo.task}
            </label>
          </div>
          <div>
            {/* <button className="btn btn-outline-secondary me-2">Update</button> */}
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskField;
