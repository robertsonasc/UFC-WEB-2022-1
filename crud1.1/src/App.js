import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";
//import Page1 from "./components/Page1";
//import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Crud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="createStudent">Create Student</a></li>
                  <li><a className="dropdown-item" href="listStudent">List Student</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Professor
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="createProfessor">Create Professor</a></li>
                  <li><a className="dropdown-item" href="listProfessor">List Professor</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor/>}/>
        <Route path="listProfessor" element={<ListProfessor/>}/>
        <Route path="editProfessor/:id" element={<EditProfessor/>}/>
      </Routes>
    </div>

  );
}

export default App;
