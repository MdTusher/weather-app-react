import { useEffect, useState } from "react";
import Results from "./Results";
import Search from "./Search";

const key = "3b0f7f731971b01e010fcdb1088bfd0e";

export default function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  async function fetchData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${key}&units=metric`
      );
      const data = await response.json();

      if (data) {
        setResults(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchData(search);
  }
  useEffect(() => {
    fetchData("dhaka");
  }, []);
  return (
    <main className="pt-3 h-2/4 w-2/4 mt-20 mx-auto bg-gray-100 rounded-lg shadow-lg flex flex-col justify-center items-center max-lg:w-3/4 ">
      <h2 className="text-2xl font-bold mb-6">Weather App</h2>
      <section>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </section>
      <section>
        <Results loading={loading} results={results} />
      </section>
    </main>
  );
}
