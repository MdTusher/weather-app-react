function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex gap-10 mb-6">
      <input
        className="py-1 px-3 bg-blue-200 border-2 border-blue-600 rounded-lg"
        type="text"
        placeholder="City"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="py-1 px-3 bg-blue-200 border-2 border-blue-600 rounded-lg font-bold"
        onClick={handleSearch}
      >
        Get Weather
      </button>
    </div>
  );
}

export default Search;
