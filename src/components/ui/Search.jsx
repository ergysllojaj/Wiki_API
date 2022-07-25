import React from "react";
import { useState } from "react";

export default function Search({ getQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (q) => {
    setSearchTerm(q);
    getQuery(q);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </section>
  );
}
