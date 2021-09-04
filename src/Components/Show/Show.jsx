import ReactHtmlParser from 'react-html-parser';

const Show = ({ show }) => {
  console.log(show);
  return (
    <div key={show.id}>
      {/* Check if show has an image, if not display a placeholder */}
      {show.image ? (
        <img src={show.image.medium} alt={show.name} />
      ) : (
        <img src='https://via.placeholder.com/210' alt='Placeholder Image' />
      )}

      <h2>{show.name}</h2>
      <div>{ReactHtmlParser(show.summary)}</div>
    </div>
  );
};

export default Show;
