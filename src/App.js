import { useState } from 'react';
import SearchField from './Components/SearchField/SearchField';
import Show from './Components/Show/Show';

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
        return <Show show={show.show} />;
      })}
    </div>
  );
}

export default App;
