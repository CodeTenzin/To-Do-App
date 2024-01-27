import { useForm } from "react-hook-form";

export interface Todo {
  id: number;
  task: string;
  // striked: boolean;
}

interface Props {
  onSubmit: (data: Todo) => void;
}

const InputField = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // data - {task: "..."}, data.task - "hello"
        onSubmit(data);
        console.log("Input:", data.task);

        reset();
      })}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Add a task"
        {...register("task", { required: true })}
      />
    </form>
  );
};

export default InputField;
