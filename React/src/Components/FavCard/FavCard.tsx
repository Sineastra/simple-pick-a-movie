import { Link } from "react-router-dom"
import styles from "./FavCard.module.scss"
import { movieIntF } from "../../_interfaces/movies"
import { imagePipe } from "../../utils/pipes"


interface propsIntF {
	movie: movieIntF,
}

const SingleGridMovie = ({ movie }: propsIntF) => {
	return (
		<div role="slide">
			<Link to={ `/details/${ movie.externalId }` } className={ styles.link }>
				<img src={ imagePipe(movie.poster) } alt="poster" className={ styles.slide }/>
				<h4 role="title">{ movie.title }</h4>
				<h5 role="genre">{ movie.genres.join(', ') }</h5>
			</Link>
		</div>
	)
}

export default SingleGridMovie