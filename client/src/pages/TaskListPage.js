import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import { getTasks, deleteTask } from "../services/taskService";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h1 className="bg-red-500 text-white text-3xl font-semibold text-center py-2">
        TODO List
      </h1>
      <Link to="/task">
        <button className="mx-[41vw] my-5 text-3xl text-white font-semibold bg-blue-500  rounded-xl p-3 px-4 hover:bg-green-500">
          Create New Task
        </button>
      </Link>
      <TaskList
        tasks={tasks}
        onUpdate={(task) => {}}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default TaskListPage;
