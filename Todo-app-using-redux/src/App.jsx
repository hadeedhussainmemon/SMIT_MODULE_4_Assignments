import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Trash2, Edit2, Check } from "lucide-react";
import { addTodo, deleteTodo, toggleTodo, editTodo, clearCompleted } from "./features/todoSlice";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodoFn = () => {
    if (input.trim() === "") return;
    dispatch(addTodo({ task: input }));
    setInput("");
  };

  const handleEditSave = (id) => {
    if (editText.trim() === "") return;
    dispatch(editTodo({ id, newTask: editText }));
    setEditId(null);
    setEditText("");
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-1">
            Tasks
          </h1>
          <p className="text-gray-600">Simple, fast and focused</p>
        </header>

        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="new-task">Add task</label>
            <input
              id="new-task"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodoFn()}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Add new task"
            />
            <div className="flex items-center gap-2">
              <button onClick={addTodoFn} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium btn-icon" aria-label="Add task">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </button>
              <button onClick={() => dispatch(clearCompleted())} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg btn-icon" aria-label="Clear completed tasks" title="Clear completed">
                <Trash2 className="w-4 h-4 text-gray-700" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div>{activeCount} active • {completedCount} completed</div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded ${filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
                aria-pressed={filter === "all"}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded ${filter === "active" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
                aria-pressed={filter === "active"}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 rounded ${filter === "completed" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
                aria-pressed={filter === "completed"}
              >
                Completed
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-12 w-12 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M9 16h6M9 8h.01M15 9v6m0 0l3-3m-3 3l-3-3" />
              </svg>
              <div className="font-medium">No tasks match this filter</div>
              <div className="text-sm">Add a task or change the filter to see tasks.</div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredTodos.map((item, index) => (
                <li key={item.id} className="p-4 sm:p-5 flex items-center justify-between gap-3">
                  {editId === item.id ? (
                    <div className="flex-1 flex items-center gap-3">
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                        aria-label="Edit task"
                      />
                      <button onClick={() => handleEditSave(item.id)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Save</button>
                      <button onClick={() => setEditId(null)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded">Cancel</button>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1 flex items-center gap-4">
                        <button
                          onClick={() => dispatch(toggleTodo({ id: item.id }))}
                          className={`rounded-full w-6 h-6 flex items-center justify-center border ${item.completed ? "bg-indigo-600 border-indigo-600" : "bg-white border-gray-300"}`}
                          aria-label={item.completed ? "Mark as active" : "Mark as completed"}
                        >
                          {item.completed ? <Check className="w-3 h-3 text-white" /> : null}
                        </button>
                        <span className={`text-lg ${item.completed ? "line-through text-gray-400" : "text-gray-800"}`}>{item.task}</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <button onClick={() => { setEditId(item.id); setEditText(item.task); }} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded btn-icon">
                          <Edit2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button onClick={() => dispatch(deleteTodo({ id: item.id }))} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded btn-icon">
                          <Trash2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
