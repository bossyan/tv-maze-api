const SearchField = ({ query, setQuery, shows, setShows }) => {
  function search() {
    if (query.length) {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((shows) => shows.json())
        .then((data) => {
          setShows(data);
        });
    }
  }
  return (
    <div>
      <input
        type='text'
        name='search_show'
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchField;
