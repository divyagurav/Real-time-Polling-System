import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { socket } from "../services/socket";

const PollResults = () => {
  const { id } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(`/api/polls/${id}`);
      setResults(response.data);
    };
    fetchResults();

    socket.on("updateResults", (updatedResults) => {
      setResults(updatedResults);
    });

    return () => {
      socket.off("updateResults");
    };
  }, [id]);

  if (!results) return <div>Loading...</div>;

  return (
    <div>
      <h2>{results.question}</h2>
      {results.options.map((option, index) => (
        <div key={index}>
          <span>
            {option}: {results.votes[index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PollResults;
