import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Real-Time Polling</h1>
      <Link to="/create">Create a Poll</Link>
      <Link to="/polls">View Polls</Link>
    </div>
  );
};

export default HomePage;
