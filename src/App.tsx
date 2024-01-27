import { useState } from "react";
import InputField, { Todo } from "./components/InputField";
import TaskField from "./components/TaskField";
import FilterTask from "./components/InputFilters";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  let new_task: Todo;

  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // TODO: add to the list but task isnt displayed, only the button displayed.

  // Adds null
  const addHandler = () => {
    setTodos([{ ...new_task, id: todos.length + 1 }, ...todos]);
    // console.log(todos);
  };

  return (
    <div className="container mt-5">
      <InputField
        // Code duplication for Enter and Add
        onSubmit={(new_task) => {
          setTodos([{ ...new_task, id: todos.length + 1 }, ...todos]);
        }}
      />
      <TaskField todos={todos} onDelete={deleteHandler} />
      <FilterTask todos={todos} onAdd={addHandler} />
    </div>
  );
};

export default App;
