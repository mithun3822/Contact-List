import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import LoadingSpinner from "./LoadingSpinner";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ContactDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: persons,
    error,
    isPending,
  } = useFetch("http://localhost:8000/persons/" + id);

  const handleDelete = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/persons/" + persons.id, {
      method: "DELETE",
    }).then(() => {
      alert("Deleted!");
      history.push("/");
    });
  };
  return (
    <>
      {persons && (
        <>
          <div className="row mt-5 form-group">
            <div className="col-12">
              <div className="card btn text-primary bg-light border-3 shadow-lg">
                <label>My Name is {persons.name}</label>&nbsp;
                <label>My Age is {persons.Age}</label>&nbsp;
                <label>My Occupation is {persons.Occupation}</label>
              </div>
            </div>
          </div>
          <div className="row form-group mt-5">
            <div className="col-3">
              <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </>
      )}
      {isPending && <LoadingSpinner />}
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default ContactDetails;
