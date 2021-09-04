import './Show.css';
import ReactHtmlParser from 'react-html-parser';

import { Button, Row } from 'react-bootstrap';

const Show = ({ show }) => {
  console.log(show);
  return (
    <div className='show' key={show.id}>
      {/* Check if show has an image, if not display a placeholder */}
      <div className='show--image'>
        {show.image ? (
          <img src={show.image.medium} alt={show.name} />
        ) : (
          <img src='https://via.placeholder.com/210' alt='Placeholder Image' />
        )}
      </div>

      <div className='show--detail'>
        <h2>{show.name}</h2>
        {ReactHtmlParser(show.summary)}
        <Button href={show.url} target='_blank'>
          Show episodes
        </Button>
      </div>
    </div>
  );
};

export default Show;
