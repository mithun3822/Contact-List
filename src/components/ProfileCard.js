import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProfileCard = ({ persons }) => {
  return persons.map((person) => (
    <Link to={`/persons/${person.id}`}>
      <div className="card mb-3" style={{ maxWidth: "18rem" }} key={person.id}>
        <div className="card-body bg-warning shadow">
          <h2 className="card-title">{person.name}</h2>
          <p className="card-text">Age: {person.Age}</p>
          <p className="card-text">Occupation: {person.Occupation}</p>
        </div>
      </div>
    </Link>
  ));
};

export default ProfileCard;
