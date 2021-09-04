import { useState } from 'react';
import SearchField from './Components/SearchField/SearchField';

function App() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'></header>
      <SearchField
        query={query}
        setQuery={setQuery}
        shows={shows}
        setShows={setShows}
      />
      {shows.map((show) => {
        return <div key={show.show.id}>{show.show.name}</div>;
      })}
    </div>
  );
}

export default App;
