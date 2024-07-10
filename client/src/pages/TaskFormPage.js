import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { getTasks, createTask, updateTask } from "../services/taskService";

const TaskFormPage = () => {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchTask(id);
    }
  }, [id]);

  const fetchTask = async (taskId) => {
    const { data } = await getTasks();
    const task = data.find((task) => task.id === taskId);
    setTask(task);
  };

  const handleSaveTask = async (taskData) => {
    if (task) {
      await updateTask(task.id, taskData);
    } else {
      await createTask(taskData);
    }
    navigate("/");
  };

  return (
    <div>
      <h2 className="bg-red-500 text-white text-3xl font-semibold text-center py-2 mb-4">
        {task ? "Edit Task" : "Create Task"}
      </h2>
      <TaskForm onSave={handleSaveTask} task={task} />
    </div>
  );
};

export default TaskFormPage;
