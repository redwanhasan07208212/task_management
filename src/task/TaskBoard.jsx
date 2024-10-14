import { useState } from "react";
import SearchBox from "./SearchBox";
import ShowModal from "./ShowModal";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "React Native",
    description:
      "React is a very widely supported component for all over the world and provides an easy way to interact with React Native and other components",
    tags: ["react", "nextjs", "JS"],
    priority: "High",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModalTask, setShowModalTask] = useState(false);
  const [updateModalTask, setUpdateModalTask] = useState(null);
  const handleSaveTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModalTask(false);
  };
  const handleEditTask = (EditTask) => {
    // console.log("first edit task" , EditTask)
    setUpdateModalTask(EditTask);
    setShowModalTask(true);
  };
  const handleCloseTask = () => {
    setShowModalTask(false);
    setUpdateModalTask(null);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleDeleteAllTask = () => {
    setTasks([]);
  };
  const handleFavouriteTask = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks(newTasks);
  };
  const handleSearchTask = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks(filtered);
  };
  return (
    <div>
      <section className="mb-20" id="tasks">
        {showModalTask && (
          <ShowModal
            onSave={handleSaveTask}
            updateModalTask={updateModalTask}
            onCloseTask={handleCloseTask}
          />
        )}
        <div className="container">
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <SearchBox onSearch={handleSearchTask} />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              deleteAllTask={handleDeleteAllTask}
              handleAddTask={() => setShowModalTask(true)}
            />
            <TaskList
              onDelete={handleDeleteTask}
              tasks={tasks}
              onEdit={handleEditTask}
              onFav={handleFavouriteTask}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
