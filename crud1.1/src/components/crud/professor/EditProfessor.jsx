import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { professors } from "./dataProfessor.js";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();

  useEffect(() => {
    const professor = professors[params.id];
    setName(professor.name);
    setUniversity(professor.university);
    setDegree(professor.degree);
  }, [params.id]);

  const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Name: ${name} \nUniversity: ${university}\nDegree: ${degree}`);
  };

  return (
    <div>
      <h2>Editar Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>University</label>
          <input
            type="text"
            className="form-control"
            value = {university ?? ""}
            name = "university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
