import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
