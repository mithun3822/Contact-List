import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewContact = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const history = useHistory();
  const person = { name, Age: age, Occupation: occupation };
  //
  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "" || age.trim() === "" || occupation.trim() === "") {
      alert("Enter all the fields");
      return false;
    }
    fetch("http://localhost:8000/persons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    }).then(() => {
      alert("Added!");
      history.push("/");
    });
  };
  //
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter your age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <input
            type="text"
            className="form-control"
            id="occupation"
            placeholder="Enter your occupation"
            name="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </form>
    </>
  );
};

export default NewContact;
