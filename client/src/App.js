import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import TaskFormPage from "./pages/TaskFormPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/task" element={<TaskFormPage />} />
        <Route path="/task/:id" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
