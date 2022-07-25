import React from "react";

export default function Results({ results, loading }) {
  return loading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {results.map((result) => (
        <li key={result.pageid}>
          <h3>{result.title}</h3>
          <br />
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
          <br />
          <a href={`https://en.wikipedia.org/wiki/${result.title}`}>
            Read More
          </a>
          <br /> <br />
          <hr />
          <br />
        </li>
      ))}
    </ul>
  );
}
