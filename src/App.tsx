import { useState } from "react";
import InputField, { Todo } from "./components/InputField";
import TaskField from "./components/TaskField";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <InputField
        onSubmit={(new_task) => {
          setTodos([{ ...new_task, id: todos.length + 1 }, ...todos]);
          console.log(todos);
        }}
      />
      <TaskField todos={todos} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
