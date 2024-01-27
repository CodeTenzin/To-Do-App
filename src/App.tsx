import { useState } from "react";
import InputField, { Todo } from "./components/InputField";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="container">
      <InputField
        onSubmit={(new_task) => {
          setTodos([{ ...new_task, id: todos.length + 1 }, ...todos]);
          console.log(todos);
        }}
      />
    </div>
  );
};

export default App;
