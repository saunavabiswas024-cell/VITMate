import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Tasks from "./pages/Tasks";
import Events from "./pages/Events";

function App() {


const [tasks, setTasks] = useState([
    "Complete Digital Assessment",
    "Revise Network Theory",
    "Revise Dictionaries in Python",
    "Revise Engineering Drawing"
]);

return (
    <BrowserRouter>

        <header>
            <h1>VITMATE</h1>

            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/subjects">Subjects</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/events">Events</Link></li>
            </ul>
        </header>

        <Routes>

            <Route
                path="/"
                element={<Home pendingTasks={tasks.length} />}
            />

            <Route
                path="/subjects"
                element={<Subjects />}
            />

            <Route
                path="/tasks"
                element={
                    <Tasks
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                }
            />

            <Route
                path="/events"
                element={<Events />}
            />

        </Routes>

    </BrowserRouter>
);


}

export default App;
