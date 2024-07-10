import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      <div className="flex mx-5  ">
        <ul className="flex gap-8 flex-wrap">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="max-w-sm p-6 bg-white border
               border-gray-200 rounded-lg shadow hover:bg-gray-100
                dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
                "
            >
              <h3 className="text-3xl font-semibold">{task.title}</h3>
              <p className="text-xl">Status: {task.status}</p>
              <p className="text-xl">
                Due Date: {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <div className="flex gap-3 mt-4">
                <Link
                  className="bg-green-400 text-white px-6 text-xl rounded-xl"
                  to={`/task/${task.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-400 text-white  px-3 text-xl rounded-xl"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
