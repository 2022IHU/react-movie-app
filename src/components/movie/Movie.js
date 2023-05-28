import { Link } from 'react-router-dom';
import './movie.css';

function Movie({ coverImg, title, rating, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h4 className="title">{title}</h4>
      <h4 className="rating">{rating}</h4>
    </div>
  );
}

export default Movie;
