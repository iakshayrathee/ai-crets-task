import React, { useState, useEffect } from "react";

const TaskForm = ({ onSave, task }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [status, setStatus] = useState(task ? task.status : "pending");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, status, dueDate });
    setTitle("");
    setDescription("");
    setStatus("pending");
    setDueDate("");
  };

  return (
    <>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="mb-5">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>

          <textarea
            placeholder="Enter Description"
            id="description"
            value={description}
            rows="4"
            cols="50"
            onChange={(e) => setDescription(e.target.value)}
            required
            classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <form class="max-w-sm mx-auto mb-3">
          <label
            for="status"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
          </select>
        </form>
        <label
          for="date"
          classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Due Date
        </label>
        <div class="rounded-lg mb-6 max-w-sm bg-gray-50 border border-gray-300 text-gray-900">
          <input
            datepicker
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            id="date"
            type="date"
            class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
     dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
          text-sm w-full sm:w-auto px-40 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
           dark:focus:ring-blue-800"
        >
          Save Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
