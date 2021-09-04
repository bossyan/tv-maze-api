import { useState } from 'react';
import { Button, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import './SearchField.css';

const SearchField = ({ query, setQuery, shows, setShows }) => {
  const [isLoading, setLoading] = useState(false);

  function search() {
    if (query.length) {
      setLoading(true);
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((shows) => shows.json())
        .then((data) => {
          setShows(data);
          setLoading(false);
        });
    }
  }
  return (
    <div className='searchField'>
      <InputGroup className='mb-3'>
        <FormControl
          value={query}
          onInput={(e) => setQuery(e.target.value)}
          aria-describedby='basic-addon2'
        />

        {!isLoading ? (
          <Button className='search' onClick={search}>
            Search
          </Button>
        ) : (
          <Button className='search' disabled>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Loading...
          </Button>
        )}
      </InputGroup>
    </div>
  );
};

export default SearchField;
