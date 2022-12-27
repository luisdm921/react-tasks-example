import { useState, useContext } from "react";
import { TaskContex } from "../contex/TaskContext";

function TaskForm() {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const { createTask } = useContext(TaskContex);

  function handleSubmit(e) {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    SetTitle("");
    SetDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => SetTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => SetDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
