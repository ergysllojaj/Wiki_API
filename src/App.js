import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import Results from "./components/ui/Results";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${query}&srlimit=5`
      );

      setResults(result.data.query.search);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Results results={results} loading={loading} />
    </div>
  );
}

export default App;
