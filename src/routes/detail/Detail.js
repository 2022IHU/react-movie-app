import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../../components/navbar/Nav';
import Loading from '../../components/loading/Loading';
import './detail.css';

function Detail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="detail-container">
          <Nav />
          <div className="img-container">
            <img
              className="detail-img"
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <div className="data-container">
              <p>{movie.title}</p>
              <p>
                {movie.genres && movie.genres.length > 0
                  ? movie.genres.join(', ')
                  : ''}
              </p>
              <p>{movie.description_full}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
