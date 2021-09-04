import { useState } from 'react';
import SearchField from './Components/SearchField/SearchField';
import Show from './Components/Show/Show';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Show Finder</h2>
      </header>
      <Container>
        <SearchField
          query={query}
          setQuery={setQuery}
          shows={shows}
          setShows={setShows}
        />

        {shows.map((show) => {
          return <Show show={show.show} />;
        })}
      </Container>
    </div>
  );
}

export default App;
