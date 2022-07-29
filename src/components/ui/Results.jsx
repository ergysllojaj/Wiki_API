import React from "react";
import Loadingif from "./Loadingif";

export default function Results({ results, loading }) {
  return loading ? (
    <Loadingif />
  ) : results.length ? (
    <ul>
      {results.map((result) => (
        <li key={result.pageid}>
          <br />
          <br />
          <h3>{result.title}</h3>
          <br />
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
          <br />
          <a href={`https://en.wikipedia.org/wiki/${result.title}`}>
            Read More
          </a>
          <br />
          <br />
          <hr />
        </li>
      ))}
    </ul>
  ) : (
    <div className="noresults">
      <p>No data</p>
    </div>
  );
}
