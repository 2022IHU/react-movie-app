import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Movie from '../../components/movie/Movie';
import Loading from '../../components/loading/Loading';
import Nav from '../../components/navbar/Nav';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './slider.css';

import { EffectCoverflow, Navigation, Mousewheel } from 'swiper';

function Slider() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&limit=10`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {loading ? '' : <Nav />}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            // navigation={true}
            mousewheel={true}
            modules={[EffectCoverflow, Navigation, Mousewheel]}
            className="mySwiper"
            initialSlide={3}
          >
            <div>
              {movies.map((movie) => (
                <SwiperSlide>
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default Slider;
