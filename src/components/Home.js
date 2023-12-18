// Home.js
import React from "react";
import useFetch from "../hooks/useFetch";
import ProfileCard from "./ProfileCard";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const {
    data: persons,
    error,
    isPending,
  } = useFetch("http://localhost:8000/persons");
  //

  return (
    <div className="container-fluid">
      <>
        {isPending && <LoadingSpinner />}
        <div className="row mt-3">
          <div className="col-9">
            {persons && <ProfileCard persons={persons} />}
          </div>
          <div className="col-3">
            <Link to="/new">
              <div className="btn btn-primary">Add Profile</div>
            </Link>
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </>
    </div>
  );
};

export default Home;
