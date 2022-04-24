import react from "react";
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({title,year,summary,poster,genres}){
    return(
        <div className="movie_data">
        <img src={poster} alt={title} title={title}/>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie__genres">
				{genres.map((genre, index) => {
					return (
						<li key={index} className="movie_genre">
							{genre}
						</li>
					)
				})}
			</ul>
			<p className="movie__summary">{summary.slice(0,180)}...</p>        
        </div>
    );

}
// title,summary,medium_cover_image->poster
Movie.PropTypes={
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;