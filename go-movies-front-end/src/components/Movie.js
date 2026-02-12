import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {

    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`http://localhost:8080/movies`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            setMovie(myMovie)    
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, rated: {movie.mpaa_rating}</em></small>
            <hr />
            <h3>{movie.description}</h3>
        </div>
    )
}

export default Movie;